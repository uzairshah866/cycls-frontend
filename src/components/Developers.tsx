import { Button } from "./ui/button";
import { ArrowRight, Code } from "lucide-react";

const Developers = () => {
  return (
    <section id="developers" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Zero-Config Dream
              </span>{" "}
              for Builders
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cycls is built by developers, for developers. Our open-source core
              gives you ultimate flexibility, while our zero-config philosophy
              removes all the boilerplate. The Python SDK is all you need to
              learn. With perfect dev/prod parity, what you build locally is
              exactly what scales globally on our serverless infrastructure.
            </p>
            <Button className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300">
              Read the Docs
              <ArrowRight
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-cyan-400" size={20} />
                <span className="text-gray-400 text-sm">Terminal</span>
              </div>
              <pre className="text-sm text-green-400 leading-relaxed">
                <code>{`$ pip install cycls
$ cycls init my-agent
$ cycls deploy

🚀 Agent deployed!
🌍 https://my-agent.cycls.app
💰 Revenue dashboard ready`}</code>
              </pre>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
