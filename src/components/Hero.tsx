import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/40 to-emerald-900/60">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-block">
            <span className="text-7xl animate-bounce inline-block">🌱</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6 leading-tight">
            Cultivating Hope,
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Growing Tomorrow
            </span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Empowering rural communities in Uganda through sustainable agriculture, environmental conservation, and economic development.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-6 text-lg shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transform hover:scale-105 transition-all duration-300">
              Explore Our Work
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-green-400/50 text-green-400 hover:bg-green-400/10 hover:border-green-400 backdrop-blur-sm px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
              Get Involved
            </Button>
          </div>
        </div>

        {/* Hero Image with Glass Effect */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-6xl">
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-transparent blur-2xl"></div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <img
                src="/coffee_plantation.png"
                alt="Coffee plantation in Uganda"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                  <p className="text-white text-lg font-semibold">Sustainable Coffee Farming</p>
                  <p className="text-gray-300 text-sm mt-1">Earth Sprout Foundation • Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}