import { Separator } from "@/components/ui/separator"

export function EnvironmentalBenefits() {
  return (
    <section id="environment" className="relative lg:py-20 py-10 overflow-hidden lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            🌿 Environmental Impact & Benefits
          </h2>
          <p className="text-xl leading-8 text-gray-300">
            Our agroforestry and sustainable farming practices create lasting positive effects on Uganda's ecosystems and climate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-400/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-[url('/leaves.png')] bg-cover bg-center opacity-5"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">1. Ecology & Biodiversity</h3>
              <p className="text-gray-400 mb-6">Supporting wildlife and natural habitats</p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-green-400 mb-3">Habitats & Wildlife Corridors</h4>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Fruit trees create habitats for pollinators, birds, and mammals
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Mixed-species systems mimic natural forests
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-green-400 mb-3">Soil Health & Water Management</h4>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Deep roots stabilize soil and reduce erosion
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Fallen leaves enrich soil organic matter
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Root networks improve water infiltration
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/20">
                <img src="/leaves.png" alt="Green leaves representing biodiversity" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-[url('/water_reservoir.png')] bg-cover bg-center opacity-5"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">2. Climate Regulation & Carbon Sequestration</h3>
              <p className="text-gray-400 mb-6">Mitigating global warming through natural processes</p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-blue-400 mb-3">Carbon Capture</h4>
                  <p className="text-sm text-gray-300">Trees act as carbon sinks, storing CO₂ in biomass and soils</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-blue-400 mb-3">Microclimate Benefits</h4>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">✓</span>
                      Shade and evapotranspiration moderate temperatures
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">✓</span>
                      Cooling effects on fields and homes
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/20">
                <img src="/water_reservoir.png" alt="Water reservoir for climate regulation" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-400/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-[url('/fruit.png')] bg-cover bg-center opacity-5"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">3. Enhancing Agricultural Resilience</h3>
              <p className="text-gray-400 mb-6">Building sustainable farming systems</p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-orange-400 mb-3">Drought & Flood Resistance</h4>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">✓</span>
                      Shade reduces evaporation during dry periods
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">✓</span>
                      Roots retain moisture and prevent erosion
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">✓</span>
                      Slowed runoff protects against heavy rains
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-orange-400 mb-3">Crop Productivity</h4>
                  <p className="text-sm text-gray-300">Improved soil moisture and nutrients benefit companion crops, often increasing yields</p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/20">
                <img src="/fruit.png" alt="Fruits representing agricultural productivity" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-emerald-400/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-[url('/coffee_plantation.png')] bg-cover bg-center opacity-5"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">4. Sustainable Agroforestry Systems</h3>
              <p className="text-gray-400 mb-6">Earth Sprout-style layered farming</p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-emerald-400 mb-3">Mixed Species Approach</h4>
                  <p className="text-sm text-gray-300">Planting various tree species alongside crops creates resilient, layered landscapes</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-emerald-400 mb-3">Long-term Benefits</h4>
                  <ul className="text-sm space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">✓</span>
                      Mirrors syntropic and permaculture designs
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">✓</span>
                      Pioneer species give way to canopy trees
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">✓</span>
                      Maximizes land use and biodiversity
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/20">
                <img src="/coffee_plantation.png" alt="Coffee plantation agroforestry" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="relative z-10 p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">5. Broader Environmental & Social Gains</h3>
            <p className="text-gray-400 mb-8">Comprehensive positive impacts</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-400/30">
                <h4 className="font-semibold text-cyan-400 text-lg mb-3">Air Quality</h4>
                <p className="text-sm text-gray-300">Trees filter pollutants like NO₂ and SO₂</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-400/30">
                <h4 className="font-semibold text-blue-400 text-lg mb-3">Watershed Protection</h4>
                <p className="text-sm text-gray-300">Trees along waterways limit eutrophication and preserve freshwater</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-400/30">
                <h4 className="font-semibold text-indigo-400 text-lg mb-3">Climate Resilience</h4>
                <p className="text-sm text-gray-300">Diverse ecosystems adapt better to pests, droughts, and temperature swings</p>
              </div>
            </div>

            <Separator className="my-8 bg-white/10" />

            <div>
              <h4 className="font-semibold text-white text-xl mb-6">Summary of Environmental Benefits</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-green-400 font-semibold">Benefit</th>
                      <th className="text-left py-4 px-4 text-green-400 font-semibold">How It's Delivered</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">Carbon sequestration</td>
                      <td className="py-4 px-4">Trees capture atmospheric CO₂ in stems, roots, soil</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">Biodiversity</td>
                      <td className="py-4 px-4">Provides habitat, supports pollinators and wildlife</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">Soil & water health</td>
                      <td className="py-4 px-4">Stabilizes soil, improves water infiltration</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">Microclimate buffer</td>
                      <td className="py-4 px-4">Shade and evapotranspiration reduce extreme heat</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium">Ecosystem resilience</td>
                      <td className="py-4 px-4">Mixed species increase adaptability and yield</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}