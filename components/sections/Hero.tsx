"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ServiceConstellation } from "@/components/ui/ServiceConstellation"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Minimal scroll effect for the text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen bg-electric overflow-hidden flex items-end pb-24 lg:pb-32"
      aria-label="Hero"
    >
      {/* Vibrant Abstract Elements - not "AI" blobs, but energetic brand colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-lime/40 blur-[120px] rounded-full mix-blend-overlay"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-mars/40 blur-[120px] rounded-full mix-blend-overlay"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 flex flex-col justify-end"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 w-full">
          <div className="max-w-[90vw] md:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-display font-bold tracking-tight leading-[0.95] text-neutral-950 mb-8"
                style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
              >
                One studio.
                <br />
                <span className="text-lime">Every asset</span>
                <br />
                your brand needs.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-12"
            >
              <p className="text-neutral-950 font-medium tracking-wide" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                Websites · Design · Video · Marketing · 3D
              </p>
              
              <a
                href="#services"
                className="group inline-flex items-center gap-3 bg-neutral-950 text-lime rounded-full h-12 md:h-14 px-8 text-sm md:text-base font-bold tracking-wide transition-transform duration-300 hover:scale-105"
              >
                Explore Our Work
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Side: Interactive Constellation */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <ServiceConstellation />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
