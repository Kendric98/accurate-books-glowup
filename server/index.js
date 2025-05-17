const express = require('express');
const cors = require('cors');
const MailerLite = require('@mailerlite/mailerlite-nodejs').default;
require('dotenv').config();

const app = express();

// Initialize MailerLite client
const mailerLite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Subscribe endpoint
app.post('/api/subscribe', async (req, res) => {
  console.log('Received subscription request:', req.body);
  
  const { email, name } = req.body;

  // Basic validation
  if (!email || !name) {
    console.log('Validation failed: Missing email or name');
    return res.status(400).json({
      success: false,
      error: {
        message: 'Email and name are required'
      }
    });
  }

  try {
    console.log('Attempting to add subscriber to MailerLite:', { email, name });
    
    // Add subscriber to MailerLite with specific group ID
    const params = {
      email: email,
      fields: {
        name: name
      },
      groups: [process.env.MAILERLITE_GROUP_ID],
      status: 'active'
    };

    console.log('MailerLite params:', params);

    const response = await mailerLite.subscribers.createOrUpdate(params);
    console.log('MailerLite response:', response);

    // Send success response
    res.json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('MailerLite Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    
    // Handle specific MailerLite errors
    if (error.response?.data?.error?.message) {
      return res.status(400).json({
        success: false,
        error: {
          message: error.response.data.error.message
        }
      });
    }

    // Generic error response
    res.status(500).json({
      success: false,
      error: {
        message: 'Failed to subscribe. Please try again later.'
      }
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    success: false,
    error: {
      message: 'Internal server error'
    }
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment variables loaded:', {
    MAILERLITE_API_KEY: process.env.MAILERLITE_API_KEY ? 'Set' : 'Not set',
    MAILERLITE_GROUP_ID: process.env.MAILERLITE_GROUP_ID ? 'Set' : 'Not set'
  });
}); 