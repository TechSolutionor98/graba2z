const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// Step 1: Get access token using Basic Auth
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
// GET ACCESS TOKEN
async function getAccessToken() {
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
}
// Step 2: Create order and redirect user to pay
// router.post('/ngenius', async (req, res) => {
//   const { order_id, amount, currency = 'AED' } = req.body;

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
//     console.log("Order creation URL:", `${process.env.NGENIUS_API_URL}/transactions/outlets/${process.env.NG_OUTLET_ID}/orders`);

//     res.json({
//       success: true,
//       paymentUrl: orderResponse.data._links.payment.href
//     });

//   } catch (error) {
//     console.error('Payment Error:', error.response?.data || error.message);
//     res.status(500).json({
//       success: false,
//       error: 'Payment processing failed',
//       details: error.response?.data || error.message
//     });
//   }
// });
// CREATE ORDER
router.post('/ngenius', async (req, res) => {
  const { order_id, amount, currency = 'AED' } = req.body;
  if (!order_id || !amount) {
    return res.status(400).json({ success: false, error: 'Missing order_id or amount' });
  }

  try {
    const token = await getAccessToken();
    const reference = `ORDER-${order_id}-${Date.now()}`;
    const paymentData = {
      action: "PURCHASE",
      amount: {
        currencyCode: currency,
        value: amount * 100
      },
      merchantAttributes: {
        redirectUrl: `${process.env.SITE_URI}/payment-callback.html?orderId=${order_id}&ref=${reference}`,
        cancelUrl: `${process.env.SITE_URI}/payment-canceled.html`
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
        }
      }
    );

    res.json({ success: true, paymentUrl: orderResponse.data._links.payment.href });
  } catch (error) {
    console.error('Payment Error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: 'Payment processing failed',
      details: error.response?.data || error.message
    });
  }
});

// Optional: verify route
router.post('/verify', async (req, res) => {
  const { orderId, paymentRef } = req.body;

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

    if (response.data.state === 'CAPTURED') {
      res.json({ success: true });
    } else {
      res.json({ success: false, error: 'Payment not captured' });
    }

  } catch (error) {
    console.error('Verification Error:', error);
    res.status(500).json({
      success: false,
      error: 'Payment verification failed'
    });
  }
});

module.exports = router;
