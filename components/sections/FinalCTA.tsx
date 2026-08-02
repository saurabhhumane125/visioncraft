"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const SERVICE_OPTIONS = [
  "Website Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Production",
  "2D & 3D Visualization",
]

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  })
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello VisionCraft Studio! I would like to initiate a project.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Interested In:* ${selectedServices.length > 0 ? selectedServices.join(", ") : "Not specified"}\n\n*Project Details:*\n${formData.details}`
    
    const url = `https://wa.me/917887962110?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setIsModalOpen(false)
    setFormData({ name: "", email: "", details: "" })
    setSelectedServices([])
  }

  return (
    <>
      <section
        id="contact"
        className="relative bg-white text-neutral-950 overflow-hidden"
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
                  <a href="mailto:visioncraftstudio22@gmail.com" className="text-2xl font-bold hover:opacity-70 transition-opacity link-underline">
                    visioncraftstudio22@gmail.com
                  </a>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-xs uppercase tracking-widest font-bold mb-3 text-neutral-950/50">Phone</span>
                    <p className="text-2xl font-bold">
                      7887962110
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
                <motion.button
                  onClick={() => setIsModalOpen(true)}
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
                </motion.button>
                <p className="text-center text-xs font-bold uppercase tracking-widest mt-6 text-neutral-950/50">
                  Trusted by 50+ global brands
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-6 md:p-10 overflow-y-auto">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-neutral-950 tracking-tight mb-2">Project Inquiry</h3>
                    <p className="text-neutral-950/60 font-medium">Tell us what you need and we'll reply directly on WhatsApp.</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-neutral-950/40 hover:text-neutral-950 bg-neutral-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-950/60">Your Name</label>
                      <input 
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-neutral-100 border-none px-4 py-3 outline-none focus:ring-2 focus:ring-electric transition-shadow font-medium text-neutral-950"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-950/60">Email Address</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-neutral-100 border-none px-4 py-3 outline-none focus:ring-2 focus:ring-electric transition-shadow font-medium text-neutral-950"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-950/60">Services Required</label>
                    <div className="flex flex-wrap gap-3">
                      {SERVICE_OPTIONS.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 text-sm font-bold border transition-colors ${
                            selectedServices.includes(service) 
                              ? "bg-neutral-950 text-white border-neutral-950" 
                              : "bg-transparent text-neutral-950/60 border-neutral-950/20 hover:border-neutral-950/40"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-950/60">Project Details</label>
                    <textarea 
                      required
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full bg-neutral-100 border-none px-4 py-3 outline-none focus:ring-2 focus:ring-electric transition-shadow font-medium text-neutral-950 min-h-[120px] resize-none"
                      placeholder="Tell us about your goals, timeline, and budget..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-electric text-neutral-950 h-14 font-bold tracking-wide hover:bg-[#A3E600] transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    Send on WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
