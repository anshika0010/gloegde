"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import image1 from "../../public/image.webp";

gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    // Compute exact distance (no gaps).
    const maxX = () => container.scrollWidth - section.clientWidth;

    // Scope GSAP to this component
    const ctx = gsap.context(() => {
      gsap.set(container, { x: 0 });

      gsap.to(container, {
        // move exactly as wide as needed (no overshoot / no leftover)
        x: () => -maxX(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          pin: true,
          scrub: 1,
          // snap to each card by progress; still smooth
          snap: 1 / (gsap.utils.toArray(".card").length - 1),
          end: () => "+=" + maxX(),
          invalidateOnRefresh: true,
          anticipatePin: 1,
          // If you see extra vertical space after the pin, uncomment:
          // pinSpacing: false,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [mounted]);

  const cardData = [
    {
      id: 1,
      image: image1,
      title: "Modern Architecture",
      description:
        "Discover innovative architectural designs that shape our future cities",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/5c/14/72/5c14720afdd38dad4e842657263dbfc5.jpg",
      title: "Natural Beauty",
      description:
        "Experience breathtaking landscapes and pristine natural environments",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
      title: "Future Technology",
      description:
        "Explore cutting-edge innovations that will transform tomorrow",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/1200x/dc/38/07/dc3807e84cad06846cc5892e914034a6.jpg",
      title: "Urban Life",
      description:
        "Immerse yourself in the energy and rhythm of metropolitan living",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
      title: "Urban Life",
      description:
        "Immerse yourself in the energy and rhythm of metropolitan living",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
      title: "Urban Life",
      description:
        "Immerse yourself in the energy and rhythm of metropolitan living",
    },
  ];

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-16 overflow-hidden"
    >
      {/* Heading */}
      <div className="mb-3">
        <h2 className="text-3xl px-4 md:text-5xl font-bold text-gray-900">
          Latest Articles
        </h2>
        <p className="mt-4 px-4 text-gray-800 text-xl ">
          India’s No.1 Overseas Career Consultant and presumably the world’s
          largest B2C immigration firm. Established in 1999, our 50+
          company-owned and managed offices across India, Australia, the United
          Arab Emirates, the United Kingdom, and Canada.
        </p>
      </div>

      {/* Cards (use gap instead of mx to avoid trailing space) */}
      <div
        ref={containerRef}
        className="flex h-[400px] gap-16 will-change-transform"
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card flex-shrink-0  rounded-2xl p-5 w-[900px] h-full relative group cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 rounded-xl group-hover:scale-105"
                priority={card.id === 1}
                unoptimized={typeof card.image === "string"}
              />
              <div className="absolute inset-0 bg-black/30 rounded-xl group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-12">
              <h2 className="text-5xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-5">
                {card.title}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl leading-relaxed opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {card.description}
              </p>
            </div>

            {/* Card number */}
            <div className="absolute top-8 right-8 z-10">
              <span className="text-white/60 text-2xl font-light">
                0{card.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollCards;
