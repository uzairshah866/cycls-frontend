import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // adjust for fixed navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false); // close mobile menu on click
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Button
            onClick={() => handleScroll("hero")}
            className="text-xl font-bold text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cycls
            </span>
          </Button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Button
              onClick={() => handleScroll("how-it-works")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </Button>
            <Button
              onClick={() => handleScroll("developers")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Developers
            </Button>
            <Button
              onClick={() => handleScroll("enterprise")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Enterprise
            </Button>
          </div>

          {/* CTA (always visible) */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Start Building
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/10 px-4 py-6 space-y-4">
          <Button
            onClick={() => handleScroll("how-it-works")}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </Button>
          <Button
            onClick={() => handleScroll("developers")}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors"
          >
            Developers
          </Button>
          <Button
            onClick={() => handleScroll("enterprise")}
            className="block w-full text-left text-gray-300 hover:text-white transition-colors"
          >
            Enterprise
          </Button>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Start Building
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
