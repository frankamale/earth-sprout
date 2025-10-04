

import { Hero } from "./components/Hero"
import { Mission } from "./components/Mission"
import { AgriculturalInitiatives } from "./components/AgriculturalInitiatives"
import { EnvironmentalBenefits } from "./components/EnvironmentalBenefits"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      <AgriculturalInitiatives />
      <EnvironmentalBenefits />
      <Footer />
    </div>
  )
}

export default App
