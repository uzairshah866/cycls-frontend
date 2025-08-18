import { Code, DollarSign, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Code to Customer in{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Three Steps
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 hover:shadow-2xl hover:shadow-blue-500/20">
            <CardHeader>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <Code className="text-blue-400" size={32} />
              </div>
              <CardTitle>Write Your Agent</CardTitle>
              <CardDescription>
                Focus on what you do best. Write your agent's logic in a simple
                Python function. Our guided meta-agent can even help you get
                started, turning ideas into code even faster.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Step 2 */}
          <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 hover:shadow-2xl hover:shadow-purple-500/20">
            <CardHeader>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <Zap className="text-purple-400" size={32} />
              </div>
              <CardTitle>Deploy Instantly</CardTitle>
              <CardDescription>
                Add our <code>@cycls.agent</code> decorator to your function.
                That's it. Cycls automatically packages your agent into a
                full-stack, serverless application with a pre-built frontend and
                API.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Step 3 */}
          <Card className="bg-gradient-to-br from-green-900/40 to-blue-900/40 hover:shadow-2xl hover:shadow-green-500/20">
            <CardHeader>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  3
                </div>
                <DollarSign className="text-green-400" size={32} />
              </div>
              <CardTitle>Monetize Immediately</CardTitle>
              <CardDescription>
                Launch your subscription business in minutes. Our managed
                platform comes with a built-in user pool and monetization,
                allowing you to charge for your agent with a simple take-rate
                model.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
