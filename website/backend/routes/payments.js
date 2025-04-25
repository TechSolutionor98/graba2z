// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
// require('dotenv').config();
// async function getAccessToken() {
//   const response = await axios.post(
//     `${process.env.NGENIUS_API_URL}/identity/auth/access-token`,
//     null,
//     {
//       headers: {
//         'Authorization': `Basic ${process.env.NETWORK_API_SECRET}`,
//         'Content-Type': 'application/vnd.ni-identity.v1+json',
//         'Accept': 'application/vnd.ni-identity.v1+json'
//       }
//     }
//   );
//   return response.data.access_token;
// }
// // CREATE ORDER
// router.post('/ngenius', async (req, res) => {
//   const { order_id, amount, currency = 'AED' } = req.body;
//   if (!order_id || !amount) {
//     return res.status(400).json({ success: false, error: 'Missing order_id or amount' });
//   }

//   try {
//     const token = await getAccessToken();
//     const reference = `ORDER-${order_id}-${Date.now()}`;
//     const paymentData = {
//       action: "PURCHASE",
//       amount: {
//         currencyCode: currency,
//         value: amount * 100
//       },
//       merchantAttributes: {
//         redirectUrl: `${process.env.SITE_URI}/payment-callback.html?orderId=${order_id}&ref=${reference}`,
//         cancelUrl: `${process.env.SITE_URI}/payment-canceled.html`
//       },
//       reference
//     };

//     const orderResponse = await axios.post(
//       `${process.env.NGENIUS_API_URL}/transactions/outlets/${process.env.NG_OUTLET_ID}/orders`,
//       paymentData,
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/vnd.ni-payment.v2+json',
//           'Accept': 'application/vnd.ni-payment.v2+json'
//         }
//       }
//     );

//     res.json({ success: true, paymentUrl: orderResponse.data._links.payment.href });
//   } catch (error) {
//     console.error('Payment Error:', error.response?.data || error.message);
//     res.status(500).json({
//       success: false,
//       error: 'Payment processing failed',
//       details: error.response?.data || error.message
//     });
//   }
// });

// // Optional: verify route
// router.post('/verify', async (req, res) => {
//   const { orderId, paymentRef } = req.body;

//   try {
//     const token = await getAccessToken();

//     const response = await axios.get(
//       `${process.env.NGENIUS_API_URL}/transactions/${paymentRef}`,
//       {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Accept': 'application/vnd.ni-payment.v2+json'
//         }
//       }
//     );

//     if (response.data.state === 'CAPTURED') {
//       res.json({ success: true });
//     } else {
//       res.json({ success: false, error: 'Payment not captured' });
//     }

//   } catch (error) {
//     console.error('Verification Error:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Payment verification failed'
//     });
//   }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../database');
require('dotenv').config();

// Helper function to get access token
async function getAccessToken() {
  try {
    const response = await axios.post(
      `${process.env.NGENIUS_API_URL}/identity/auth/access-token`,
      null,
      {
        headers: {
          'Authorization': `Basic ${process.env.NETWORK_API_SECRET}`,
          'Content-Type': 'application/vnd.ni-identity.v1+json',
          'Accept': 'application/vnd.ni-identity.v1+json'
        }
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to get access token:', error);
    throw new Error('Payment service unavailable');
  }
}

// Create payment order
router.post('/ngenius', async (req, res) => {
  const { order_id, amount, currency = 'AED' } = req.body;

  if (!order_id || !amount || isNaN(amount)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid order details'
    });
  }

  try {
    const token = await getAccessToken();
    const reference = `CARD-${order_id}-${Date.now()}`;

    const paymentData = {
      action: "PURCHASE",
      amount: {
        currencyCode: currency,
        value: Math.round(amount * 100)
      },
      merchantAttributes: {
        redirectUrl: `${process.env.SITE_URI}/payment-callback?orderId=${order_id}&ref=${reference}`,
        cancelUrl: `${process.env.SITE_URI}/payment-canceled`
      },
      reference
    };

    const orderResponse = await axios.post(
      `${process.env.NGENIUS_API_URL}/transactions/outlets/${process.env.NG_OUTLET_ID}/orders`,
      paymentData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/vnd.ni-payment.v2+json',
          'Accept': 'application/vnd.ni-payment.v2+json'
        },
        timeout: 10000
      }
    );

    if (!orderResponse.data?._links?.payment?.href) {
      throw new Error('Payment URL not received');
    }

    // Update order with card payment info in card_info field
    await db.query(
      `UPDATE onlineorders 
       SET payment_type = 'card',
           card_info = JSON_SET(COALESCE(card_info, '{}'), '$.payment_reference', ?)
       WHERE order_id = ?`,
      [reference, order_id]
    );

    res.json({
      success: true,
      paymentUrl: orderResponse.data._links.payment.href,
      paymentReference: reference
    });

  } catch (error) {
    console.error('Payment Error:', error);

    // Mark as failed in card_info
    if (order_id) {
      await db.query(
        `UPDATE onlineorders 
         SET card_info = JSON_SET(COALESCE(card_info, '{}'), '$.status', 'failed')
         WHERE order_id = ?`,
        [order_id]
      );
    }

    res.status(500).json({
      success: false,
      error: 'Payment processing failed',
      details: error.message
    });
  }
});

// Payment verification endpoint
router.get('/verify/:orderId/:paymentRef', async (req, res) => {
  const { orderId, paymentRef } = req.params;

  try {
    const token = await getAccessToken();
    const response = await axios.get(
      `${process.env.NGENIUS_API_URL}/transactions/${paymentRef}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.ni-payment.v2+json'
        }
      }
    );

    const paymentState = response.data.state;
    const isSuccessful = ['CAPTURED', 'PURCHASED', 'AUTHORIZED'].includes(paymentState);

    // Update card_info with payment status
    await db.query(
      `UPDATE onlineorders 
       SET card_info = JSON_SET(
         COALESCE(card_info, '{}'), 
         '$.status', ?,
         '$.payment_date', NOW(),
         '$.gateway_response', ?
       )
       WHERE order_id = ?`,
      [
        isSuccessful ? 'paid' : 'failed',
        JSON.stringify(response.data),
        orderId
      ]
    );

    res.json({
      success: isSuccessful,
      state: paymentState,
      orderId
    });

  } catch (error) {
    console.error('Verification Error:', error);

    // Mark as failed if verification fails
    await db.query(
      `UPDATE onlineorders 
       SET card_info = JSON_SET(COALESCE(card_info, '{}'), '$.status', 'failed')
       WHERE order_id = ?`,
      [orderId]
    );

    res.status(500).json({
      success: false,
      error: 'Payment verification failed'
    });
  }
});

module.exports = router;