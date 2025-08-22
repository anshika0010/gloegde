'use client'
import React, { useEffect, useRef, useState } from "react";
import { Shield } from "lucide-react";

const EsteemedClients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const trustedCompanies = [
    { name: "TechCorp Industries", logo: null },
    { name: "Global Finance Ltd", logo: null },
    { name: "Metro Solutions", logo: null },
    { name: "Prime Security Systems", logo: null },
    { name: "Alpha Manufacturing", logo: null },
    { name: "Beta Services Group", logo: null },
    { name: "Gamma Technologies", logo: null },
    { name: "Delta Enterprises", logo: null },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Client Carousel */}
        <div className="text-center">
          <h3
            className={`mb-12 text-3xl font-bold text-slate-900 transition-all duration-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Our <span className="text-red-600">Esteemed Clientele</span>
          </h3>

          {/* <p
            className={`mb-16 text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-600 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            Trusted by leading organizations across diverse industries for their
            security and manpower needs
          </p> */}

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="flex animate-scroll">
              {[...Array(3)].map((_, groupIndex) => (
                <div className="flex gap-8 px-4" key={groupIndex}>
                  {trustedCompanies.map((company, index) => (
                    <div
                      key={`${groupIndex}-${index}`}
                      className="flex h-32 w-56 flex-col items-center justify-center rounded-xl bg-white p-6 shadow-lg border border-slate-100 hover:scale-105 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex h-12 w-20 items-center justify-center rounded-lg bg-red-50 mb-3 group-hover:bg-red-100 transition-colors duration-300">
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="h-8 w-16 object-contain"
                          />
                        ) : (
                          <Shield className="h-7 w-7 text-red-600" />
                        )}
                      </div>
                      <p className="text-sm font-semibold text-slate-900 text-center leading-tight">
                        {company.name}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default EsteemedClients;
