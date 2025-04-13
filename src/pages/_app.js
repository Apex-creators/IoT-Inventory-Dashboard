// src/pages/_app.js
import '../styles/globals.css'; // Global CSS
import NavigationBar from '../components/NavigationBar'; // Import the navigation bar

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
