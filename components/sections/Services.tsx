"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import servicesData from "@/content/services.json"

const SERVICE_VISUALS: Record<string, { bgClass: string; label: string; textClass: string; img: string }> = {
  "website-development": {
    bgClass: "bg-electric",
    label: "Web",
    textClass: "text-white",
    img: "/images/portfolio-product.png",
  },
  "digital-marketing": {
    bgClass: "bg-lime",
    label: "Growth",
    textClass: "text-neutral-950",
    img: "/images/portfolio-fintech.png",
  },
  "graphic-design": {
    bgClass: "bg-neutral-950",
    label: "Design",
    textClass: "text-white",
    img: "/images/portfolio-cafe.png",
  },
  "video-editing": {
    bgClass: "bg-mars",
    label: "Motion",
    textClass: "text-white",
    img: "/images/portfolio-villa.png",
  },
  "2d-visualization": {
    bgClass: "bg-neutral-200",
    label: "2D",
    textClass: "text-neutral-950",
    img: "/images/portfolio-jewelry.png",
  },
  "3d-visualization": {
    bgClass: "bg-electric-dark",
    label: "3D",
    textClass: "text-white",
    img: "/images/portfolio-dental.png",
  },
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section
      id="services"
      className="bg-neutral-100 text-neutral-950 relative overflow-hidden grain"
      style={{
        paddingTop: "var(--space-section-generous)",
        paddingBottom: "var(--space-section-normal)",
      }}
      aria-label="Services"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        {/* Section header — editorial, left-aligned */}
        <div className="mb-16 md:mb-24">
          <span className="text-electric text-sm font-mono tracking-widest mb-4 block">
            01
          </span>
          <h2
            className="font-display font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "var(--text-display)" }}
          >
            What We
            <br />
            Build
          </h2>
        </div>

        {/* Accordion panels */}
        <div className="border-t border-neutral-950/10">
          {servicesData.map((service, idx) => {
            const isActive = activeIndex === idx
            const visual = SERVICE_VISUALS[service.id] || {
              bgClass: "bg-neutral-200",
              label: "",
              textClass: "text-neutral-950",
              img: "/images/portfolio-product.png",
            }

            return (
              <div
                key={service.id}
                className="border-b border-neutral-950/10 group/row"
              >
                {/* Hover background highlight */}
                <div className="relative">
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover/row:bg-neutral-950/[0.02] transition-colors duration-500 pointer-events-none" />
                  
                  {/* Collapsed row */}
                  <button
                    onClick={() => toggle(idx)}
                    className="relative w-full flex items-center justify-between py-6 md:py-10 group text-left cursor-pointer px-4 md:px-6 -mx-4 md:-mx-6 transition-transform duration-300 active:scale-[0.99]"
                    aria-expanded={isActive}
                    aria-controls={`service-panel-${service.id}`}
                  >
                    <div className="flex items-center gap-4 md:gap-8">
                      <span
                        className={`font-mono text-sm transition-colors duration-300 ${
                          isActive ? "text-electric" : "text-neutral-950/30 group-hover:text-neutral-950/50"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <h3
                        className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-300 group-hover:text-electric group-hover:translate-x-2 ${
                          isActive ? "text-electric translate-x-2" : "text-neutral-950"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-neutral-950/5 group-hover:bg-electric/10 transition-all duration-500 ${
                        isActive ? "rotate-45 bg-electric text-white" : "text-neutral-950/40"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:text-electric'}`}
                      >
                        <line
                          x1="8"
                          y1="0"
                          x2="8"
                          y2="16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="0"
                          y1="8"
                          x2="16"
                          y2="8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded panel */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        id={`service-panel-${service.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 md:pb-14 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 md:px-6 -mx-4 md:-mx-6">
                          {/* Left: Description + tags */}
                          <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-center">
                            <p className="text-neutral-950/70 text-base md:text-lg leading-relaxed mb-8 font-medium">
                              {service.summary}
                            </p>
                            <div className="flex flex-wrap gap-2.5">
                              {service.subServices.map((sub, subIdx) => (
                                <span
                                  key={subIdx}
                                  className="text-xs px-3.5 py-2 rounded-full bg-neutral-950/5 text-neutral-950/80 border border-neutral-950/10 font-medium tracking-wide hover:bg-neutral-950/10 hover:border-neutral-950/20 transition-colors cursor-default"
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right: Vibrant visual with Image */}
                          <div className="lg:col-span-5">
                            <div
                              className="relative w-full aspect-[16/9] lg:aspect-[4/3] bg-neutral-900 overflow-hidden rounded-sm"
                            >
                              <img 
                                src={visual.img} 
                                alt={visual.label} 
                                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700 hover:scale-105"
                              />
                              <div className={`absolute inset-0 ${visual.bgClass} mix-blend-multiply opacity-40 pointer-events-none`} />
                              
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <motion.span 
                                  initial={{ scale: 0.9, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                  className={`font-display text-5xl md:text-7xl font-bold tracking-tighter ${visual.textClass} drop-shadow-xl`}
                                >
                                  {visual.label}
                                </motion.span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

