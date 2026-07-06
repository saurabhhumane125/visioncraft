"use client"

import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section
      className="relative bg-mars text-neutral-950 overflow-hidden"
      style={{
        paddingTop: "var(--space-section-normal)",
        paddingBottom: "var(--space-section-normal)",
      }}
      aria-label="Call to action"
    >
      {/* Subtle noise */}
      <div className="absolute inset-0 grain pointer-events-none opacity-30" />

      {/* Grid overlay for texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 14, 31, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 14, 31, 0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-16">
        
        {/* Main Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-8 items-start">
          
          {/* Left Column: Huge typography (col 1-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-neutral-950/60 text-sm font-mono tracking-widest mb-8 block uppercase font-bold">
                Start a Project
              </span>
              <h2
                className="font-display font-bold tracking-tight leading-[0.9] mb-12"
                style={{ fontSize: "clamp(3rem, 6.5vw, 8rem)" }}
              >
                Your brand's
                <br />
                next chapter
                <br />
                starts here.
              </h2>
              <p className="text-neutral-950/80 text-xl md:text-2xl leading-relaxed max-w-lg font-medium">
                Stop settling for templates. We build award-winning digital experiences that position you as the industry leader.
              </p>
            </div>
          </div>
          
          {/* Right Column: Editorial details (col 9-12) */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col">
            
            {/* Value Props / Benefits */}
            <div className="border-t-2 border-neutral-950/20 pt-8 pb-12">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-neutral-950/50">Every Project Includes</h3>
              <ul className="space-y-4">
                {[
                  "Dedicated creative director",
                  "Custom design systems",
                  "High-performance architecture",
                  "Premium brand positioning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold text-lg text-neutral-950">
                    <span className="w-1.5 h-1.5 bg-neutral-950 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="border-t-2 border-neutral-950/20 pt-8 pb-12 flex flex-col gap-8">
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold mb-3 text-neutral-950/50">Project Inquiry</span>
                <a href="mailto:hello@visioncraftagency.com" className="text-2xl font-bold hover:opacity-70 transition-opacity link-underline">
                  hello@visioncraftagency.com
                </a>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold mb-3 text-neutral-950/50">Phone</span>
                  <p className="text-2xl font-bold">
                    +91 98765 43210
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-xs uppercase tracking-widest font-bold mb-3 text-neutral-950/50">Response Time</span>
                  <p className="text-lg font-bold flex items-center gap-2 justify-end">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-950 animate-pulse" />
                    Under 24H
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="border-t-2 border-neutral-950/20 pt-10">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between bg-neutral-950 text-white h-20 px-8 font-display text-2xl font-bold tracking-wide transition-all shadow-xl hover:bg-neutral-900"
              >
                <span>Initiate Project</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
              <p className="text-center text-xs font-bold uppercase tracking-widest mt-6 text-neutral-950/50">
                Trusted by 50+ global brands
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
