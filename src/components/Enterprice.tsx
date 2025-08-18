import { Button } from "./ui/button";
import { ArrowRight, Globe, Shield, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const Enterprise = () => {
  return (
    <section id="enterprise" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Complete{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Commercial Engine
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cycls is more than a tool; it's an economic engine. For startups, we
            provide a complete business-in-a-box, handling users, payments, and
            infrastructure so you can focus on your product. For enterprises,
            our sovereign managed cloud, hosted in Dammam, offers a flexible,
            enterprise-ready platform to build foundational AI capabilities
            within the Kingdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-orange-900/40 to-red-900/40 hover:shadow-2xl hover:shadow-orange-500/20">
            <CardHeader>
              <Users className="text-orange-400 mb-6" size={48} />
              <CardTitle>For Startups</CardTitle>
              <CardDescription>
                Complete business-in-a-box solution handling users, payments,
                and infrastructure so you can focus on your product.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 hover:shadow-2xl hover:shadow-purple-500/20">
            <CardHeader>
              <div className="flex items-center mb-6">
                <Shield className="text-purple-400 mr-4" size={48} />
                <Globe className="text-indigo-400" size={48} />
              </div>
              <CardTitle>For Enterprise</CardTitle>
              <CardDescription>
                Our sovereign managed cloud, hosted in Dammam...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
            Contact Sales
            <ArrowRight
              className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
