// pages/api/shorten.js
import { nanoid } from 'nanoid';

let urlMap = {}; // Temporary in-memory storage for demo purposes

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { longUrl } = req.body;

    if (!longUrl) {
      return res.status(400).json({ error: 'URL is required' });
    }

    const shortId = nanoid(5); // Generate a unique 5-character short code
    const shortUrl = `${req.headers.host}/${shortId}`;

    // Store the long URL in memory (you can use a database here)
    urlMap[shortId] = longUrl;

    return res.status(200).json({ shortUrl });
  } else {
    return res.status(405).json({ error: 'Only POST method allowed' });
  }
}
