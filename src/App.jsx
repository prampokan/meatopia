import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Scan from "./components/Scan"
import Feature from "./components/Feature"
import Team from "./components/Team"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-figtree">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Scan />
      <Team />
      <Footer />
    </div>
  )
}

export default App
