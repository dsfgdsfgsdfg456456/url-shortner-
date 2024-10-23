// pages/[id].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

let urlMap = {}; // The same in-memory storage (you would normally retrieve from a database)

export default function RedirectPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const longUrl = urlMap[id]; // Retrieve the original URL
      if (longUrl) {
        window.location.href = longUrl; // Redirect to the original URL
      } else {
        // Handle if the short URL is not found
        alert('Short URL not found');
      }
    }
  }, [id]);

  return <p>Redirecting...</p>;
}
