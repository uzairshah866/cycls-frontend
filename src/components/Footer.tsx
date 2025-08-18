import { Button } from "./ui/button";

const Footer = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // adjust for fixed navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Button
            onClick={() => handleScroll("hero")}
            className="text-xl font-bold text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cycls
            </span>
          </Button>
          <div className="flex space-x-8 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2025 Cycls. Saudi Arabia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
