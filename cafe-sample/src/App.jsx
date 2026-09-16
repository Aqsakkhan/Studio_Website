import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import MenuSection from './components/MenuSection.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Story />
        <MenuSection />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
