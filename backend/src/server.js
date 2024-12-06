const cors = require('cors');
const fs = require('fs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables (client ID, client secret)
const axios = require('axios');

// Path to the SSL certificate files
const options = {
  key: fs.readFileSync('./private-key.pem'), // Path to your private key file
  cert: fs.readFileSync('./certificate.pem'), // Path to your certificate file
};

const app = express();
const port = 5000;

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',  // Allow your React frontend (running on localhost:3000) to make requests
  methods: ['GET', 'POST'],
  credentials: true,  // Allow cookies or other credentials if required
}));

// Middleware to parse JSON body
app.use(bodyParser.json());

// Your existing token exchange route
// Token exchange route (no client secret)
app.post('/api/spotify/token', async (req, res) => {
  const { code, codeVerifier, redirectUri } = req.body;
  console.log('Posting to /api/spotify/token with code:', code, 'and verifier:', codeVerifier);

  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirectUri, // This must match the redirect URI used in the frontend
    client_id: process.env.CLIENT_ID, // Only client_id is required
    code_verifier: codeVerifier, // The code_verifier from PKCE
  });
  console.log('Requesting token with url:', tokenUrl);

  try {
    const response = await axios.post(tokenUrl, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    res.json(response.data); // Return the token data if successful
  } catch (error) {
    console.error('Error during token exchange:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);  // Log Spotify's error response
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Server error during token exchange' });
    }
  }
});

app.get('/api/spotify/me', async (
  req,
  res
) => {
  const { accessToken } = req.query;
  console.log('Getting user profile with access token:', accessToken);

  const meUrl = 'https://api.spotify.com/v1/me';
  try {
    const response = await axios.get(meUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
    console.log('User profile successfully retrieved')// Return the user profile data if successful
  } catch (error) {
    console.error('Error getting user profile:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);  // Log Spotify's error response
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Server error getting user profile' });
    }
  }
});

app.get('/api/spotify/me/top/artists', async (
  req,
  res
) => {
  const { accessToken } = req.query;
  console.log('Getting top tracks with access token:', accessToken);

  const topUrl = 'https://api.spotify.com/v1/me/top/artists';
  try {
    const response = await axios.get(topUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
    console.log('Top tracks successfully retrieved')// Return the user profile data if successful
  } catch (error) {
    console.error('Error getting top tracks:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);  // Log Spotify's error response
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Server error getting top tracks' });
    }
  }
});

app.get('/api/spotify/player/queue', async (
  req,
  res
) => {
  const { accessToken } = req.query;
  console.log('Getting Player queue with access token:', accessToken);

  const queueUrl = 'https://api.spotify.com/v1/me/player/queue';
  try {
    const response = await axios.get(queueUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
    console.log('Player queue successfully retrieved')// Return the user profile data if successful
  } catch (error) {
    console.error('Error getting Player queue:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);  // Log Spotify's error response
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Server error getting Player queue' });
    }
  }
})

// Start server with http
http.createServer(options, app).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
