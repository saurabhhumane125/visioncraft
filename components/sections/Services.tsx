"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
        {/* Section header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
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
          <p className="max-w-md text-neutral-950/60 font-medium pb-2">
            We deliver complete digital ecosystems. From high-converting platforms to premium brand identities, everything is crafted in-house by our integrated team.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {servicesData.map((service, idx) => {
            const visual = SERVICE_VISUALS[service.id] || {
              bgClass: "bg-neutral-950",
              label: "",
              textClass: "text-white",
              img: "/images/portfolio-product.png",
            }
            
            // Create a dynamic bento layout where the 1st and 4th items span 2 columns on large screens
            const isWide = idx === 0 || idx === 3

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`group relative overflow-hidden bg-neutral-900 rounded-3xl min-h-[400px] flex flex-col justify-end p-6 md:p-8 transform-gpu ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Background Image with hardware-accelerated hover effects */}
                <Image 
                  src={visual.img}
                  alt={visual.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
                />
                
                {/* Smooth Gradient Overlay (Better performance than mix-blend) */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Tint Overlay on Hover */}
                <div className={`absolute inset-0 ${visual.bgClass} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 w-full transform-gpu transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-white/50 font-mono text-xs tracking-widest">0{idx + 1}</span>
                    <span className="w-8 h-[1px] bg-white/20" />
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 line-clamp-2 max-w-lg transition-opacity duration-300">
                    {service.summary}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.slice(0, isWide ? 4 : 3).map((sub, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                    {service.subServices.length > (isWide ? 4 : 3) && (
                      <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/50 border border-white/5 font-medium">
                        +{service.subServices.length - (isWide ? 4 : 3)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Top Right Accent Label (Decorative) */}
                <div className="absolute top-6 right-6 font-display text-6xl md:text-8xl font-bold tracking-tighter text-white/5 pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                  {visual.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

