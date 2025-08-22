export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-6 px-4 py-10">
        {/* Left: Video */}
        <div className="w-full">
          <video
            src="/videos/visa-promo.mp4" // replace with your video path
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[350px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right: Services */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What can we do for you today?
          </h2>

          {/* Service buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition-colors">
              Study
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Migrate
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Work
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Visit
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Language
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">
              Citizenship
            </button>
          </div>

          {/* Counselling */}
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-600">Don’t know what to do?</span>
            <a href="#" className="text-red-500 font-medium hover:underline">
              Get free Counselling?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
