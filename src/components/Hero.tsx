import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            🌱 Earth Sprout Foundation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Empowering rural communities in Uganda through sustainable agriculture, environmental conservation, and economic development.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More
            </Button>
            <Button variant="outline" size="lg" className="transform hover:scale-105 transition-all duration-300 border-2 hover:border-green-500">
              Get Involved
            </Button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative h-96 w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl">
            <img
              src="/coffee_plantation.png"
              alt="Coffee plantation in Uganda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Sustainable Coffee Farming</p>
              <p className="text-xs opacity-90">Earth Sprout Foundation, Uganda</p>
            </div>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}