// pages/index.js
import { useState } from 'react';

export default function HomePage() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl }),
    });

    const data = await response.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="container">
      <h2>Simple URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="text"
          id="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter your long URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {shortUrl && (
        <div id="short-url">
          <p>Shortened URL: <a href={`https://${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: #f0f8ff;
          text-align: center;
        }
        input {
          width: 80%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
        }
        button {
          padding: 10px 20px;
          background-color: #007acc;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005f99;
        }
      `}</style>
    </div>
  );
}
