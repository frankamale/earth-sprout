import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold text-lg">
              🌱 Earth Sprout Foundation
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#mission" className="text-sm font-medium hover:text-primary transition-colors">
            Mission
          </a>
          <a href="#initiatives" className="text-sm font-medium hover:text-primary transition-colors">
            Initiatives
          </a>
          <a href="#environment" className="text-sm font-medium hover:text-primary transition-colors">
            Environment
          </a>
          <a href="#crops" className="text-sm font-medium hover:text-primary transition-colors">
            Crops
          </a>
          <a href="#aquaculture" className="text-sm font-medium hover:text-primary transition-colors">
            Aquaculture
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Donate
          </Button>
        </div>
      </div>
    </nav>
  )
}