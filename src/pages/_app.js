// pages/_app.js
import '../styles/globals.css'; // Global styles
import NavigationBar from '../components/NavigationBar'; // Import from the components folder

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
