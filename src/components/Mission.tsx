import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The Earth Sprout Foundation is a community-driven organization operating in Uganda. Our mission is to empower rural communities through sustainable agriculture, environmental conservation, Agroforestry & Land Restoration and economic development.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌾 Agricultural Initiatives
              </CardTitle>
              <CardDescription>
                Promoting diverse crops for nutrition and income
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Jackfruit, Mango, Avocado, Soursop</li>
                <li>• Cocoa and Coffee farming</li>
                <li>• Onion and Banana cultivation</li>
                <li>• Passion Fruit and Irish Potato</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🐟 Aquaculture
              </CardTitle>
              <CardDescription>
                Sustainable fish farming practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Pond construction and management</li>
                <li>• Water quality monitoring</li>
                <li>• Fish feeding techniques</li>
                <li>• Tilapia, Catfish, and Carp</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌱 Community Support
              </CardTitle>
              <CardDescription>
                Empowering farmers and youth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Free seeds and seedlings</li>
                <li>• Training and volunteering</li>
                <li>• Women and youth empowerment</li>
                <li>• Economic development</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mission Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative h-64 w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
            <img
              src="/banana_plantation.png"
              alt="Banana plantation community farming"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Community Banana Farming</p>
              <p className="text-xs opacity-90">Sustainable Agriculture Initiative</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}