'use client'
export default function ServicesSection() {
  const services = [
    {
      title: "Study",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXEP1duOXkh6zbxJqMtny6oHLSxmBhJbo1w&s",
      points: ["Abroad Universities", "Scholarships", "Guidance"],
      color: "bg-yellow-400",
    },
    {
      title: "Migrate",
      img: "/images/migrate.jpg",
      points: ["PR Assistance", "Work Permits", "Documentation"],
      color: "bg-purple-500",
    },
    {
      title: "Work",
      img: "/images/work.jpg",
      points: ["Job Search", "Resume Building", "Interview Prep"],
      color: "bg-blue-500",
    },
    {
      title: "Visit",
      img: "/images/visit.jpg",
      points: ["Tourist Visa", "Family Visa", "Business Trips"],
      color: "bg-green-500",
    },
    {
      title: "Language",
      img: "/images/language.jpg",
      points: ["IELTS/TOEFL", "Spoken English", "Coaching"],
      color: "bg-pink-500",
    },
    {
      title: "Citizenship",
      img: "/images/citizenship.jpg",
      points: ["Eligibility Check", "Legal Help", "Global Passport"],
      color: "bg-red-500",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What can we do for you today?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose a service to explore how we can help you study, migrate,
              work, visit, or even get citizenship. Our team ensures you get
              personalized guidance at every step.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Free Counselling
            </button>
          </div>

          {/* Right: Service Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group w-full h-80 cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  {/* Card Container */}
                  <div className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180" style={{ transformStyle: "preserve-3d" }}>
                    
                    {/* Front Side */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-lg"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${service.img})`,
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40" />
                      
                      {/* Title */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-2xl font-bold text-white text-center px-4">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div 
                      className={`absolute inset-0 w-full h-full rounded-xl ${service.color} shadow-lg flex flex-col justify-center items-center p-6 text-white rotate-y-180`}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        {service.title}
                      </h3>
                      
                      <div className="space-y-4">
                        {service.points.map((point, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                            <span className="text-lg font-medium">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}