// pages/_app.js
import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Component {...pageProps} />
      <Analytics /> {/* This enables Vercel Analytics */}
    </div>
  );
}

