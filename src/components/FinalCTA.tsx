import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 to-purple-900/40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Ready to Launch Your{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            AI Business?
          </span>
        </h2>
        <Button className="group bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105">
          Get Started for Free
          <ArrowRight
            className="inline-block ml-3 group-hover:translate-x-2 transition-transform"
            size={24}
          />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
