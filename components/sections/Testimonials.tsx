"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TESTIMONIALS = [
  {
    id: "01",
    name: "Dr. Siddharth Verma",
    role: "Chief Orthodontist",
    company: "Prime Smiles",
    industry: "Healthcare",
    quote: "From our clinic's complete rebrand to the new patient-focused digital experience, VisionCraft's work completely transformed how our patients perceive us. The quality is absolutely premium.",
    services: ["Brand Identity", "Website Development"],
    outcome: "40% increase in monthly patient bookings.",
  },
  {
    id: "02",
    name: "Ananya Desai",
    role: "Director of Marketing",
    company: "The Haven Resort",
    industry: "Hospitality",
    quote: "The visual assets VisionCraft delivered were breathtakingly beautiful. They perfectly captured the luxury and tranquility of our property, driving immediate engagement across all channels.",
    services: ["Digital Marketing", "2D & 3D Visualization"],
    outcome: "300% boost in direct summer bookings.",
  },
  {
    id: "03",
    name: "Rohan Kapoor",
    role: "Principal Architect",
    company: "Kapoor & Associates",
    industry: "Architecture",
    quote: "They are a rare breed of creatives who truly understand architectural nuances. The renders and marketing collateral they produced gave our pitches an undeniable edge.",
    services: ["2D & 3D Visualization", "Graphic Design"],
    outcome: "Successfully won 3 major luxury contracts.",
  },
  {
    id: "04",
    name: "Vikram Singhania",
    role: "Managing Director",
    company: "Horizon Realty",
    industry: "Real Estate",
    quote: "Their video production team is exceptional. They didn't just show our properties; they told a compelling story that resonated deeply with high-net-worth investors.",
    services: ["Video Production", "Website Development"],
    outcome: "Phase 1 properties sold out in record time.",
  },
  {
    id: "05",
    name: "Arjun Reddy",
    role: "Founder",
    company: "The Urban Roast",
    industry: "Food & Beverage",
    quote: "VisionCraft didn't just build a brand; they captured the soul of our cafe. Their attention to detail and cohesive design system turned our vision into a cultural staple.",
    services: ["Brand Identity", "Digital Marketing"],
    outcome: "60% increase in organic weekend footfall.",
  },
  {
    id: "06",
    name: "Priya Sharma",
    role: "Head of Operations",
    company: "Apex Industries",
    industry: "Manufacturing",
    quote: "We needed a modern overhaul to appeal to global clients. The new corporate website and facility showcase videos instantly established our credibility on the international stage.",
    services: ["Website Development", "Video Production"],
    outcome: "Successfully expanded into 3 new international markets.",
  },
]

// Star Rating SVG Component
const Stars = () => (
  <div className="flex gap-1 text-electric mb-6">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
)

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  
  const DURATION = 5000 // 5 seconds

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  // Auto-advance
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    // Set up the interval for auto rotation
    timerRef.current = setInterval(next, DURATION)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered, next, currentIndex]) // Added currentIndex so manual navigation resets the timer

  const current = TESTIMONIALS[currentIndex]

  return (
    <section
      id="testimonials"
      className="text-neutral-950 relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] via-[#F2F7FF] via-[45%] to-[#F7F8FA]"
      style={{
        paddingTop: "var(--space-section-normal)",
        paddingBottom: "var(--space-section-normal)",
      }}
      aria-label="Client Testimonials"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-lime/10 blur-[120px] rounded-full pointer-events-none -z-10 transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-electric/10 blur-[100px] rounded-full pointer-events-none -z-10 transform -translate-x-1/4 translate-y-1/4" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-electric font-bold tracking-widest text-sm uppercase mb-4 block">
              Testimonials
            </span>
            <h2
              className="font-display font-bold tracking-tight text-neutral-950 leading-[1.05]"
              style={{ fontSize: "var(--text-display)" }}
            >
              Trusted by ambitious brands.
            </h2>
          </div>
          <p className="text-neutral-950/60 font-medium max-w-sm text-sm md:text-base leading-relaxed md:text-left md:text-right pb-2">
            We don't just deliver creative assets. We engineer partnerships that drive measurable business outcomes.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative min-h-[550px] lg:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start absolute inset-0 w-full"
            >
              {/* Quote Column */}
              <div className="lg:col-span-7 flex flex-col h-full">
                <Stars />
                <blockquote
                  className="font-display font-medium tracking-tight leading-[1.3] text-neutral-950 mb-8 max-w-2xl"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  "{current.quote}"
                </blockquote>
                <div className="mt-auto">
                  <cite className="not-italic font-bold text-lg block text-neutral-950">
                    {current.name}
                  </cite>
                  <span className="text-neutral-950/60 text-sm font-medium block mt-1">
                    {current.role}, <span className="text-neutral-950">{current.company}</span>
                  </span>
                </div>
              </div>

              {/* Data & Services Column */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-14">
                <div className="border-l border-neutral-950/10 pl-6">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-950/40 font-bold mb-2">Industry</h4>
                  <p className="font-medium text-neutral-950">{current.industry}</p>
                </div>
                
                <div className="border-l border-neutral-950/10 pl-6">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-950/40 font-bold mb-3">Services Delivered</h4>
                  <div className="flex flex-wrap gap-2">
                    {current.services.map((service, i) => (
                      <span key={i} className="px-3 py-1 bg-neutral-950/5 text-neutral-950 text-xs font-bold rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-2 border-lime pl-6 py-1">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-950/40 font-bold mb-2">Measurable Outcome</h4>
                  <p className="font-display font-bold text-electric text-xl leading-tight">
                    {current.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Indicators */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-neutral-950/10 flex flex-wrap gap-4 md:gap-8 relative z-20">
          {TESTIMONIALS.map((testimonial, idx) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(idx)}
              className="group relative flex flex-col items-start focus:outline-none"
              aria-label={`View testimonial ${idx + 1}`}
            >
              <span className={`text-xs font-mono tracking-widest transition-colors duration-300 mb-2 ${
                idx === currentIndex ? "text-neutral-950 font-bold" : "text-neutral-950/40 group-hover:text-neutral-950/70"
              }`}>
                {testimonial.id}
              </span>
              
              {/* Indicator Bar Container */}
              <div className="w-12 sm:w-16 md:w-20 h-[2px] bg-neutral-950/10 relative overflow-hidden">
                {/* Animated Fill (only animates if currently active and not hovered) */}
                {idx === currentIndex && (
                  <motion.div
                    className="absolute top-0 left-0 bottom-0 bg-electric origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 0 : 1 }}
                    transition={{
                      duration: isHovered ? 0 : DURATION / 1000,
                      ease: "linear",
                    }}
                  />
                )}
                {/* Fallback solid state if hovered (to show paused) */}
                {idx === currentIndex && isHovered && (
                  <div className="absolute inset-0 bg-electric opacity-50" />
                )}
                {/* Previously viewed ones */}
                {idx < currentIndex && (
                  <div className="absolute inset-0 bg-neutral-950/30" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
