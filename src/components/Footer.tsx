import { Separator } from "@radix-ui/react-separator";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">🌱</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Earth Sprout Foundation
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering rural communities in Uganda through sustainable agriculture, environmental conservation, and economic development.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">Based in Uganda</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Community-driven</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Agricultural Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Seed Distribution
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Environmental Conservation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Youth Empowerment
                </a>
              </li>
            </ul>
          </div>
{/* 
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-medium text-white">Head Office</p>
                <p>Jinja Kimaka Road</p>
                <p>0775129894</p>
              </div>
              <div>
                <p className="font-medium text-white">Tororo - Nagongera</p>
                <p>0772087583</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Earth Sprout Foundation. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Building a sustainable future, one seed at a time 🌱</p>
        </div>
      </div>
    </footer>
  )
}