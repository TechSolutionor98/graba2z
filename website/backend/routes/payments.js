const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// Initiate payment with N-Genius
router.post('/api/payments/ngenius', async (req, res) => {
  const { order_id, amount } = req.body;

  if (!order_id || !amount) {
    return res.status(400).json({ error: 'Missing order ID or amount' });
  }

  try {
    // Step 1: Get access token
    const accessTokenResponse = await axios.post(
      `${process.env.NGENIUS_API_URL}/identity/auth/access-token`,
      null,
      {
        headers: {
          Authorization: `Basic ${process.env.NETWORK_API_SECRET}`,
          'Content-Type': 'application/vnd.ni-identity.v1+json',
        },
      }
    );

    const accessToken = accessTokenResponse.data.access_token;

    // Step 2: Create payment order
    const reference = `ORDER-${order_id}-${Date.now()}`;
    const requestPayload = {
      action: 'SALE',
      amount: {
        currencyCode: 'AED',
        value: amount * 100, // Amount in minor units
      },
      merchantAttributes: {
        redirectUrl: `${process.env.SITE_URI}/payment-callback.html?orderId=${order_id}`,
      },
      merchantOrderReference: reference,
    };

    const createOrderResponse = await axios.post(
      `${process.env.NGENIUS_API_URL}/transactions/outlets/${process.env.NG_OUTLET_ID}/orders`,
      requestPayload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/vnd.ni-payment.v2+json',
        },
      }
    );

    const paymentUrl = createOrderResponse.data._links.payment.href;

    res.status(200).json({ success: true, paymentUrl });
  } catch (err) {
    console.error('N-Genius Payment Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to initiate N-Genius payment' });
  }
});


module.exports = router;
