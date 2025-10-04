import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AgriculturalInitiatives() {
  return (
    <section id="initiatives" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Agricultural Initiatives
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our comprehensive farming programs focus on high-value crops and sustainable practices to ensure food security and economic growth.
          </p>
        </div>

        <Tabs defaultValue="fruit-trees" className="mt-16">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="fruit-trees">Fruit Trees</TabsTrigger>
            <TabsTrigger value="cash-crops">Cash Crops</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            <TabsTrigger value="aquaculture">Aquaculture</TabsTrigger>
          </TabsList>

          <TabsContent value="fruit-trees" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Jackfruit, Mango, Avocado & Soursop</CardTitle>
                  <CardDescription>High nutritional value and market potential</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Training on proper planting techniques</li>
                    <li>• Pest management and post-harvest handling</li>
                    <li>• Quality yields for local and export markets</li>
                  </ul>
                  <div className="mt-4 h-32 overflow-hidden rounded">
                    <img
                      src="/jackfruit.png"
                      alt="Jackfruit tree"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Planting & Spacing Details</CardTitle>
                  <CardDescription>Optimized for maximum productivity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="jackfruit">
                      <AccordionTrigger>Jackfruit</AccordionTrigger>
                      <AccordionContent>
                        Spacing: 15×15 ft (193 trees/acre)<br/>
                        Planting: Onset of rainy season<br/>
                        Propagation: Seeds or grafting
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="soursop">
                      <AccordionTrigger>Soursop</AccordionTrigger>
                      <AccordionContent>
                        Spacing: 4-6m between trees<br/>
                        Trees per hectare: 400 (160/acre)<br/>
                        Fruiting: 2-5 years
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="avocado">
                      <AccordionTrigger>Avocado</AccordionTrigger>
                      <AccordionContent>
                        Spacing: 6×6m (111 trees/acre)<br/>
                        Grafted: 2.5-3 years to fruit<br/>
                        High export potential
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="mango">
                      <AccordionTrigger>Mango</AccordionTrigger>
                      <AccordionContent>
                        Spacing: 10×10m (40 trees/acre)<br/>
                        Varieties: Apple, Dodo, Tommy Atkins<br/>
                        Fruiting: 3-4 years
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cash-crops" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Cocoa & Coffee Farming</CardTitle>
                  <CardDescription>Significant export potential</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Best practices for cultivation</li>
                    <li>• Processing and marketing guidance</li>
                    <li>• Income enhancement for farmers</li>
                  </ul>
                  <div className="mt-4 h-32 overflow-hidden rounded">
                    <img
                      src="/coffee_berries.png"
                      alt="Coffee berries"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Coffee Production Details</CardTitle>
                  <CardDescription>Uganda's major cash crop</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Types: Robusta and Arabica</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Robusta:</strong> 2.5-3 years to fruit, 3×3m spacing (450 trees/acre)</p>
                    <p><strong>Arabica:</strong> 3-4 years to fruit, 2.5×2.5m spacing (640 trees/acre)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vegetables" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Onion & Banana Farming</CardTitle>
                  <CardDescription>Quick returns and adaptability</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Soil preparation and irrigation</li>
                    <li>• Disease management</li>
                    <li>• Maximum productivity techniques</li>
                  </ul>
                  <div className="mt-4 h-32 overflow-hidden rounded">
                    <img
                      src="/banana_stems.png"
                      alt="Banana stems"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Passion Fruit & Irish Potato</CardTitle>
                  <CardDescription>High-value crops with growing demand</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Optimal planting times and spacing</li>
                    <li>• Harvesting techniques</li>
                    <li>• Market access support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="aquaculture" className="mt-8">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle>Aquaculture Support</CardTitle>
                <CardDescription>Fish farming for sustainable production</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Main Fish Types</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Tilapia: 5-6 months maturity</li>
                      <li>• African Catfish: 4-5 months</li>
                      <li>• Mirror Carp: 6-8 months</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Farming Systems</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Earthen ponds</li>
                      <li>• Concrete tanks</li>
                      <li>• Plastic/tarpaulin tanks</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 h-32 overflow-hidden rounded">
                  <img
                    src="/water_reservoir.png"
                    alt="Water reservoir for aquaculture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}