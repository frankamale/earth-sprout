import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function EnvironmentalBenefits() {
  return (
    <section id="environment" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            🌿 Environmental Impact & Benefits
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our agroforestry and sustainable farming practices create lasting positive effects on Uganda's ecosystems and climate.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle>1. Ecology & Biodiversity</CardTitle>
              <CardDescription>Supporting wildlife and natural habitats</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Habitats & Wildlife Corridors</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Fruit trees create habitats for pollinators, birds, and mammals</li>
                  <li>• Mixed-species systems mimic natural forests</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Soil Health & Water Management</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Deep roots stabilize soil and reduce erosion</li>
                  <li>• Fallen leaves enrich soil organic matter</li>
                  <li>• Root networks improve water infiltration</li>
                </ul>
              </div>
              <div className="h-32 overflow-hidden rounded">
                <img
                  src="/leaves.png"
                  alt="Green leaves representing biodiversity"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle>2. Climate Regulation & Carbon Sequestration</CardTitle>
              <CardDescription>Mitigating global warming through natural processes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Carbon Capture</h4>
                <p className="text-sm">Trees act as carbon sinks, storing CO₂ in biomass and soils</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Microclimate Benefits</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Shade and evapotranspiration moderate temperatures</li>
                  <li>• Cooling effects on fields and homes</li>
                </ul>
              </div>
              <div className="h-32 overflow-hidden rounded">
                <img
                  src="/water_reservoir.png"
                  alt="Water reservoir for climate regulation"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle>3. Enhancing Agricultural Resilience</CardTitle>
              <CardDescription>Building sustainable farming systems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Drought & Flood Resistance</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Shade reduces evaporation during dry periods</li>
                  <li>• Roots retain moisture and prevent erosion</li>
                  <li>• Slowed runoff protects against heavy rains</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Crop Productivity</h4>
                <p className="text-sm">Improved soil moisture and nutrients benefit companion crops, often increasing yields</p>
              </div>
              <div className="h-32 overflow-hidden rounded">
                <img
                  src="/fruit.png"
                  alt="Fruits representing agricultural productivity"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle>4. Sustainable Agroforestry Systems</CardTitle>
              <CardDescription>Earth Sprout-style layered farming</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Mixed Species Approach</h4>
                <p className="text-sm">Planting various tree species alongside crops creates resilient, layered landscapes</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Long-term Benefits</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Mirrors syntropic and permaculture designs</li>
                  <li>• Pioneer species give way to canopy trees</li>
                  <li>• Maximizes land use and biodiversity</li>
                </ul>
              </div>
              <div className="h-32 overflow-hidden rounded">
                <img
                  src="/coffee_plantation.png"
                  alt="Coffee plantation agroforestry"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>5. Broader Environmental & Social Gains</CardTitle>
              <CardDescription>Comprehensive positive impacts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Air Quality</h4>
                  <p className="text-sm">Trees filter pollutants like NO₂ and SO₂</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Watershed Protection</h4>
                  <p className="text-sm">Trees along waterways limit eutrophication and preserve freshwater</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Climate Resilience</h4>
                  <p className="text-sm">Diverse ecosystems adapt better to pests, droughts, and temperature swings</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h4 className="font-semibold mb-4">Summary of Environmental Benefits</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Benefit</th>
                        <th className="text-left py-2">How It's Delivered</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Carbon sequestration</td>
                        <td className="py-2">Trees capture atmospheric CO₂ in stems, roots, soil</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Biodiversity</td>
                        <td className="py-2">Provides habitat, supports pollinators and wildlife</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Soil & water health</td>
                        <td className="py-2">Stabilizes soil, improves water infiltration</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Microclimate buffer</td>
                        <td className="py-2">Shade and evapotranspiration reduce extreme heat</td>
                      </tr>
                      <tr>
                        <td className="py-2">Ecosystem resilience</td>
                        <td className="py-2">Mixed species increase adaptability and yield</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}