// src/pages/_app.js
import '../styles/globals.css';
import NavigationBar from '../components/NavigationBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <main className="max-w-5xl mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
