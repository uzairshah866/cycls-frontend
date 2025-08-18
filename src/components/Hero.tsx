import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Go from{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Agent
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              AI Business
            </span>
            <br />
            <span className="text-yellow-400">Instantly.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cycls is the definitive platform for commercial AI agents. Our
            open-source framework and managed cloud transform your Python code
            into a scalable, monetizable business with a single decorator.
          </p>
        </div>
        <Button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
          Start Building for Free
          <ArrowRight
            className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </Button>
      </div>

      {/* Floating Code Preview */}
      <div className="max-w-4xl mx-auto mt-16 relative">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-gray-400 text-sm">agent.py</span>
          </div>
          <pre className="text-sm text-gray-300 leading-relaxed overflow-x-auto">
            <code>{`@cycls.agent
def my_ai_assistant(query: str) -> str:
    """Your brilliant AI agent logic here"""
    return process_with_ai(query)

# That's it. Deploy instantly. 🚀`}</code>
          </pre>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
