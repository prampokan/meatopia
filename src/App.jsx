import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Scan from "./components/Scan"
import Feature from "./components/Feature"
import OtherFeature from "./components/OtherFeature"
import Tech from "./components/Tech"
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
      <OtherFeature />
      {/* <Tech /> */}
      <Team />
      <Footer />
    </div>
  )
}

export default App
