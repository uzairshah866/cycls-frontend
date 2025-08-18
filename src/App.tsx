import Developers from "@components/Developers";
import Enterprise from "@components/Enterprice";
import FinalCTA from "@components/FinalCTA";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import HowItWorks from "@components/HowItWorks";
import Navbar from "@components/Navbar";
import Problem from "@components/Problem";

const CyclsLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* The Problem */}
      <Problem />
      {/* How It Works */}
      <HowItWorks />
      {/* For Developers */}
      <Developers />
      {/* For Business & Enterprise */}
      <Enterprise />
      {/* Final CTA */}
      <FinalCTA />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CyclsLanding;
