import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Lookbook from './components/Lookbook.jsx'
import EditorialSpread from './components/EditorialSpread.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bone">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Lookbook />
        <EditorialSpread />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
