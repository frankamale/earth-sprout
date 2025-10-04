import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AgriculturalInitiatives() {
    return (
    <section id="initiatives" className="relative lg:py--20 py-10 lg:pt-10 overflow-hidden lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Agricultural Initiatives
          </h2>
          <p className="text-xl leading-8 text-gray-300">
            Our comprehensive farming programs focus on high-value crops and sustainable practices to ensure food security and economic growth.
          </p>
        </div>

        <Tabs defaultValue="fruit-trees" className="mt-16">
          <TabsList className=" grid w-full grid-cols-2 lg:grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10  rounded-2xl">
            <TabsTrigger value="fruit-trees" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-gray-300 rounded-xl transition-all">Fruit Trees</TabsTrigger>
            <TabsTrigger value="cash-crops" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-gray-300 rounded-xl transition-all">Cash Crops</TabsTrigger>
            <TabsTrigger value="vegetables" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-gray-300 rounded-xl transition-all">Vegetables</TabsTrigger>
            <TabsTrigger value="aquaculture" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-400 text-gray-300 rounded-xl transition-all">Aquaculture</TabsTrigger>
          </TabsList>

          <TabsContent value="fruit-trees" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-[url('/jackfruit.png')] bg-cover bg-center opacity-10"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Jackfruit, Mango, Avocado & Soursop</h3>
                  <p className="text-gray-400 mb-6">High nutritional value and market potential</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">●</span>
                      Training on proper planting techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">●</span>
                      Pest management and post-harvest handling
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">●</span>
                      Quality yields for local and export markets
                    </li>
                  </ul>
                  <div className="overflow-hidden rounded-2xl border border-white/20">
                    <img src="/jackfruit.png" alt="Jackfruit tree" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Planting & Spacing Details</h3>
                  <p className="text-gray-400 mb-6">Optimized for maximum productivity</p>
                  <Accordion type="single" collapsible className="space-y-3">
                    <AccordionItem value="jackfruit" className="border border-white/10 rounded-xl bg-white/5 px-4">
                      <AccordionTrigger className="text-white hover:text-green-400">Jackfruit</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        Spacing: 15×15 ft (193 trees/acre)<br/>
                        Planting: Onset of rainy season<br/>
                        Propagation: Seeds or grafting
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="soursop" className="border border-white/10 rounded-xl bg-white/5 px-4">
                      <AccordionTrigger className="text-white hover:text-green-400">Soursop</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        Spacing: 4-6m between trees<br/>
                        Trees per hectare: 400 (160/acre)<br/>
                        Fruiting: 2-5 years
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="avocado" className="border border-white/10 rounded-xl bg-white/5 px-4">
                      <AccordionTrigger className="text-white hover:text-green-400">Avocado</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        Spacing: 6×6m (111 trees/acre)<br/>
                        Grafted: 2.5-3 years to fruit<br/>
                        High export potential
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="mango" className="border border-white/10 rounded-xl bg-white/5 px-4">
                      <AccordionTrigger className="text-white hover:text-green-400">Mango</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        Spacing: 10×10m (40 trees/acre)<br/>
                        Varieties: Apple, Dodo, Tommy Atkins<br/>
                        Fruiting: 3-4 years
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cash-crops" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-500 hover:scale-105">
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Cocoa & Coffee Farming</h3>
                  <p className="text-gray-400 mb-6">Significant export potential</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-1">●</span>
                      Best practices for cultivation
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-1">●</span>
                      Processing and marketing guidance
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-1">●</span>
                      Income enhancement for farmers
                    </li>
                  </ul>
                  <div className="overflow-hidden rounded-2xl border border-white/20">
                    <img src="/coffee_berries.png" alt="Coffee berries" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-amber-400/50 transition-all duration-500 hover:scale-105">
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Coffee Production Details</h3>
                  <p className="text-gray-400 mb-6">Uganda's major cash crop</p>
                  <p className="text-sm text-gray-300 mb-4">Types: Robusta and Arabica</p>
                  <div className="space-y-4 text-sm text-gray-300">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <strong className="text-amber-400">Robusta:</strong> 2.5-3 years to fruit, 3×3m spacing (450 trees/acre)
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <strong className="text-amber-400">Arabica:</strong> 3-4 years to fruit, 2.5×2.5m spacing (640 trees/acre)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="vegetables" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Onion & Banana Farming</h3>
                  <p className="text-gray-400 mb-6">Quick returns and adaptability</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">●</span>
                      Soil preparation and irrigation
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">●</span>
                      Disease management
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">●</span>
                      Maximum productivity techniques
                    </li>
                  </ul>
                  <div className="overflow-hidden rounded-2xl border border-white/20">
                    <img src="/banana_stems.png" alt="Banana stems" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Passion Fruit & Irish Potato</h3>
                  <p className="text-gray-400 mb-6">High-value crops with growing demand</p>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">●</span>
                      Optimal planting times and spacing
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">●</span>
                      Harvesting techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2 mt-1">●</span>
                      Market access support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="aquaculture" className="mt-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-400/50 transition-all duration-500">
              <div className="relative z-10 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">Aquaculture Support</h3>
                <p className="text-gray-400 mb-8">Fish farming for sustainable production</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-xl text-blue-400 mb-4">Main Fish Types</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">●</span>
                        Tilapia: 5-6 months maturity
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">●</span>
                        African Catfish: 4-5 months
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">●</span>
                        Mirror Carp: 6-8 months
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-xl text-blue-400 mb-4">Farming Systems</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">●</span>
                        Earthen ponds
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">●</span>
                        Concrete tanks
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">●</span>
                        Plastic/tarpaulin tanks
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/20">
                  <img src="/water_reservoir.png" alt="Water reservoir for aquaculture" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}