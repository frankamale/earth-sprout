import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a className="flex items-center space-x-2 group" href="/">
              <span className="text-2xl">🌱</span>
              <span className="font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-emerald-400 transition-all">
                Earth Sprout Foundation
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              Mission
            </a>
            <a href="#initiatives" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              Initiatives
            </a>
            <a href="#environment" className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors">
              Environment
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}