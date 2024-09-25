// pages/_app.tsx
import '../public/styles/global.css'; // Ensure the path to your CSS file is correct
import type { AppProps } from 'next/app'; // Import AppProps for TypeScript support

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;