export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">🌱 Earth Sprout Foundation</h3>
            <p className="text-gray-300 mb-4">
              Empowering rural communities in Uganda through sustainable agriculture, environmental conservation, and economic development.
            </p>
            <p className="text-sm text-gray-400">
              Based in Uganda • Community-driven • Sustainable future
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Agricultural Training</li>
              <li>Seed Distribution</li>
              <li>Environmental Conservation</li>
              <li>Youth Empowerment</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Volunteer</li>
              <li>Donate</li>
              <li>Partner With Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Earth Sprout Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}