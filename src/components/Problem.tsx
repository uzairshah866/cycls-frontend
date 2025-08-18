const Problem = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Gap Between a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Brilliant Agent
            </span>{" "}
            and a{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Viable Business
            </span>{" "}
            is Immense.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            You've built a powerful AI agent. But turning it into a real,
            commercial product is a maze of infrastructure, frontend
            boilerplate, authentication, and payment integrations. This friction
            kills speed and innovation. Cycls is the platform designed to close
            that gap instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
