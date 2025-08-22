"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import image1 from "../../public/image.webp"

gsap.registerPlugin(ScrollTrigger)

const ScrollCards = () => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    const cards = gsap.utils.toArray(".card")

    if (!section || !container || cards.length === 0) return

    gsap.to(container, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const cardData = [
    {
      id: 1,
      image:image1,
      title: "Modern Architecture",
      description: "Discover innovative architectural designs that shape our future cities",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=800",
      title: "Natural Beauty",
      description: "Experience breathtaking landscapes and pristine natural environments",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=800",
      title: "Future Technology",
      description: "Explore cutting-edge innovations that will transform tomorrow",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=800",
      title: "Urban Life",
      description: "Immerse yourself in the energy and rhythm of metropolitan living",
    },
  ]

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-black">
      <div ref={containerRef} className="flex h-full">
        {cardData.map((card) => (
          <div key={card.id} className="card flex-shrink-0 w-screen h-full relative group cursor-pointer">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-12">
              {/* Title - always visible */}
              <h2 className="text-6xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:translate-y-[-20px]">
                {card.title}
              </h2>

              {/* Description - visible only on hover */}
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {card.description}
              </p>
            </div>

            {/* Card number indicator */}
            <div className="absolute top-8 right-8 z-10">
              <span className="text-white/60 text-2xl font-light">0{card.id}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {cardData.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-white/40 transition-colors duration-300" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollCards
