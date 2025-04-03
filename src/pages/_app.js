
import '../styles/globals.css'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="px-4 md:px-12">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
