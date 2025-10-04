export function Mission() {
  return (
    <section id="mission" className="relative lg:py-20 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Our Mission
          </h2>
          <p className="text-xl leading-8 text-gray-300">
            The Earth Sprout Foundation is a community-driven organization operating in Uganda. Our mission is to empower rural communities through sustainable agriculture, environmental conservation, Agroforestry & Land Restoration and economic development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-xl p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-white mb-2">Agricultural Initiatives</h3>
              <p className="text-gray-400 mb-4">Promoting diverse crops for nutrition and income</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Jackfruit, Mango, Avocado, Soursop
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Cocoa and Coffee farming
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Onion and Banana cultivation
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Passion Fruit and Irish Potato
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🐟</div>
              <h3 className="text-2xl font-bold text-white mb-2">Aquaculture</h3>
              <p className="text-gray-400 mb-4">Sustainable fish farming practices</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Pond construction and management
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Water quality monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Fish feeding techniques
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  Tilapia, Catfish, and Carp
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-2">Community Support</h3>
              <p className="text-gray-400 mb-4">Empowering farmers and youth</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Free seeds and seedlings
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Training and volunteering
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Women and youth empowerment
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Economic development
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Image with Glass Effect */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <img
                src="/banana_plantation.png"
                alt="Banana plantation community farming"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                  <p className="text-white text-lg font-semibold">Community Banana Farming</p>
                  <p className="text-gray-300 text-sm mt-1">Sustainable Agriculture Initiative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}