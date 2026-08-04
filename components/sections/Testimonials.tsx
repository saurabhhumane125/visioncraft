"use client"

import { motion } from "framer-motion"

const TESTIMONIALS = [
  {
    id: "01",
    name: "Dr. Siddharth Verma",
    role: "Chief Orthodontist",
    company: "Prime Smiles",
    quote: "From our clinic's complete rebrand to the new patient-focused digital experience, VisionCraft's work completely transformed how our patients perceive us. The quality is absolutely premium.",
  },
  {
    id: "02",
    name: "Ananya Desai",
    role: "Director of Marketing",
    company: "The Haven Resort",
    quote: "The visual assets VisionCraft delivered were breathtakingly beautiful. They perfectly captured the luxury and tranquility of our property, driving immediate engagement across all channels.",
  },
  {
    id: "03",
    name: "Rohan Kapoor",
    role: "Principal Architect",
    company: "Kapoor & Associates",
    quote: "They are a rare breed of creatives who truly understand architectural nuances. The renders and marketing collateral they produced gave our pitches an undeniable edge.",
  },
  {
    id: "04",
    name: "Vikram Singhania",
    role: "Managing Director",
    company: "Horizon Realty",
    quote: "Their video production team is exceptional. They didn't just show our properties; they told a compelling story that resonated deeply with high-net-worth investors.",
  },
  {
    id: "05",
    name: "Arjun Reddy",
    role: "Founder",
    company: "The Urban Roast",
    quote: "VisionCraft didn't just build a brand; they captured the soul of our cafe. Their attention to detail and cohesive design system turned our vision into a cultural staple.",
  },
  {
    id: "06",
    name: "Priya Sharma",
    role: "Head of Operations",
    company: "Apex Industries",
    quote: "We needed a modern overhaul to appeal to global clients. The new corporate website and facility showcase videos instantly established our credibility on the international stage.",
  },
]

const Stars = () => (
  <div className="flex gap-1 text-electric mb-6">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
)

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#FAFAFA] text-neutral-950"
      style={{
        paddingTop: "var(--space-section-normal)",
        paddingBottom: "var(--space-section-normal)",
      }}
      aria-label="Client Testimonials"
    >
      {/* Eye-catching Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-electric/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 grain opacity-20 pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 text-center max-w-3xl mx-auto">
          <span className="text-electric-dark font-bold tracking-[0.2em] text-xs uppercase mb-6 block font-mono">
            [ Client Success ]
          </span>
          <h2
            className="font-display font-bold tracking-tight text-neutral-950 leading-[1.05] mb-6"
            style={{ fontSize: "var(--text-display)" }}
          >
            Don't just take our word for it.
          </h2>
          <p className="text-neutral-950/60 font-medium text-lg leading-relaxed">
            See how we've helped visionary brands elevate their digital presence, dominate their markets, and build lasting connections.
          </p>
        </div>

        {/* Modern 3-Column Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.1, 
                ease: [0.21, 1.11, 0.81, 0.99] 
              }}
              className={`
                relative flex flex-col justify-between h-full
                bg-white/60 hover:bg-white/90 backdrop-blur-xl 
                border border-neutral-950/5 hover:border-electric/50 
                rounded-3xl p-8 md:p-10 transition-all duration-500 group shadow-sm
                ${idx % 3 === 1 ? 'lg:translate-y-8' : ''} 
                ${idx % 3 === 2 ? 'lg:translate-y-16' : ''}
              `}
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              <div className="relative z-10 flex-1">
                <Stars />
                <p className="text-neutral-950/80 font-medium leading-relaxed text-lg mb-10">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-neutral-950/10">
                {/* Colorful Gradient Avatar */}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  font-display font-bold text-xl text-white shadow-lg
                  ${idx % 3 === 0 ? 'bg-gradient-to-tr from-electric-dark to-emerald-500' : ''}
                  ${idx % 3 === 1 ? 'bg-gradient-to-tr from-purple-500 to-electric-dark' : ''}
                  ${idx % 3 === 2 ? 'bg-gradient-to-tr from-orange-500 to-electric-dark' : ''}
                `}>
                  {testimonial.name.charAt(0)}
                </div>
                
                <div>
                  <h4 className="text-neutral-950 font-bold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral-950/50 text-sm">
                    {testimonial.role}, <span className="text-neutral-950/80">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
