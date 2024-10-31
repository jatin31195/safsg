// spotifyApi.js
const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// Function to get access token
const getAccessToken = async () => {
    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
        grant_type: 'client_credentials',
    }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
    });
    return tokenResponse.data.access_token;
};

// Function to fetch genres
const getGenres = async () => {
    const accessToken = await getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/recommendations/available-genre-seeds`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    return response.data.genres;
};

module.exports = { getGenres };
