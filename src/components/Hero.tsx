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
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Learn More
            </Button>
            <Button variant="outline" size="lg">
              Get Involved
            </Button>
          </div>
        </div>
        {/* Image placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="relative h-96 w-full max-w-4xl overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
              [Hero Image Placeholder - Sustainable Agriculture in Uganda]
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