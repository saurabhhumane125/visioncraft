"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"

type ServiceNode = {
  id: string
  label: string
  x: number // Desktop X position (%)
  y: number // Desktop Y position (%)
  features: string[]
}

const SERVICES: ServiceNode[] = [
  {
    id: "websites",
    label: "Website Development",
    x: 15,
    y: 35,
    features: ["Business Websites", "E-Commerce Stores", "Landing Pages", "SEO Optimization"],
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    x: 50,
    y: 10,
    features: ["Social Media Creatives", "Posters & Flyers", "Brochures", "Marketing Collateral"],
  },
  {
    id: "brand-identity",
    label: "Brand Identity",
    x: 75,
    y: 20,
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"],
  },
  {
    id: "video",
    label: "Video Production",
    x: 85,
    y: 60,
    features: ["Reels & Shorts", "Corporate Videos", "Motion Graphics", "Product Advertisements"],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    x: 20,
    y: 75,
    features: ["Social Media Marketing", "Performance Advertising", "Content Strategy", "SEO & Analytics"],
  },
  {
    id: "3d",
    label: "2D & 3D Visualization",
    x: 60,
    y: 85,
    features: ["Architectural Visualization", "Product Visualization", "Interior & Exterior Renders", "3D Walkthroughs"],
  },
]

export function ServiceConstellation() {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Use a small delay for mounting to avoid hydration mismatch on isMobile
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Floating animation parameters
  const getFloatingAnimation = (index: number) => ({
    y: ["-8px", "8px"],
    x: ["-4px", "4px"],
    transition: {
      y: {
        duration: 3 + index * 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      x: {
        duration: 4 + index * 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  })

  if (!mounted) return null

  // Desktop/Tablet Radial View
  if (!isMobile) {
    return (
      <div className="relative w-full max-w-[600px] xl:max-w-[700px] aspect-square mx-auto flex items-center justify-center shrink-0 lg:ml-auto">
        {/* SVG Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {SERVICES.map((service) => {
            const isActive = activeNode === service.id
            const isDimmed = activeNode !== null && !isActive
            return (
              <motion.line
                key={`line-${service.id}`}
                x1="50%"
                y1="50%"
                x2={`${service.x}%`}
                y2={`${service.y}%`}
                stroke={isActive ? "#B4FF00" : "rgba(255,255,255,0.15)"}
                strokeWidth={isActive ? 2 : 1}
                initial={{ pathLength: 1, opacity: 0 }}
                animate={{
                  pathLength: isActive ? [0, 1] : 1,
                  opacity: isDimmed ? 0.1 : isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )
          })}
        </svg>

        {/* Central VisionCraft Node */}
        <motion.div
          className="absolute z-10 w-28 h-28 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center shadow-2xl"
          animate={getFloatingAnimation(0) as any}
        >
          <span className="font-display font-bold text-white tracking-tight text-sm">VisionCraft</span>
        </motion.div>

        {/* Orbiting Service Nodes */}
        {SERVICES.map((service, idx) => {
          const isActive = activeNode === service.id
          const isDimmed = activeNode !== null && !isActive

          return (
            <div
              key={service.id}
              className="absolute z-20"
              style={{
                left: `${service.x}%`,
                top: `${service.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Preview Card */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-52 bg-neutral-950 border border-white/10 rounded-2xl p-5 shadow-2xl pointer-events-none"
                  >
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-white/80 text-xs font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Node Button */}
              <motion.button
                onMouseEnter={() => setActiveNode(service.id)}
                onMouseLeave={() => setActiveNode(null)}
                onFocus={() => setActiveNode(service.id)}
                onBlur={() => setActiveNode(null)}
                animate={{
                  ...(getFloatingAnimation(idx + 1) as any),
                  scale: isActive ? 1.1 : 1,
                  opacity: isDimmed ? 0.3 : 1,
                }}
                className={`relative px-6 py-3 rounded-full whitespace-nowrap transition-colors duration-300 backdrop-blur-md border ${
                  isActive
                    ? "bg-lime text-neutral-950 border-lime shadow-[0_0_30px_rgba(180,255,0,0.3)]"
                    : "bg-neutral-950/80 text-white border-white/10 hover:border-white/30"
                }`}
                aria-expanded={isActive}
              >
                <span className="font-bold text-sm tracking-wide">{service.label}</span>
              </motion.button>
            </div>
          )
        })}
      </div>
    )
  }

  // Mobile View - Tappable Stacked List to avoid overlap issues
  return (
    <div className="w-full flex flex-col gap-3 mt-8 z-20 relative">
      <div className="bg-neutral-950/50 backdrop-blur-md rounded-3xl p-6 border border-white/10">
        <h3 className="font-display font-bold text-white mb-6 text-center text-lg">Our Capabilities</h3>
        <div className="flex flex-col gap-3">
          {SERVICES.map((service) => {
            const isActive = activeNode === service.id
            return (
              <div key={service.id} className="flex flex-col">
                <button
                  onClick={() => setActiveNode(isActive ? null : service.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                    isActive
                      ? "bg-lime text-neutral-950 border-lime"
                      : "bg-white/5 text-white border-white/5"
                  }`}
                >
                  <span className="font-bold text-sm tracking-wide">{service.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pt-3 pb-2 px-5 space-y-3">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-white/80 text-sm font-medium flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
