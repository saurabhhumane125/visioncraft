import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="bg-[#080808] text-neutral-100 relative overflow-hidden"
      style={{
        paddingTop: "var(--space-section-normal)",
        paddingBottom: "40px",
      }}
    >
      {/* Background wordmark */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none overflow-hidden pt-12 opacity-[0.02] mix-blend-screen">
        <span
          className="font-display font-bold tracking-tighter whitespace-nowrap select-none"
          style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }}
          aria-hidden="true"
        >
          VisionCraft
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
        {/* Main content — 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 md:mb-32">
          {/* Left 60% — Statement + contact */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <h2
              className="font-display font-bold tracking-tight leading-[1.05] mb-12"
              style={{ fontSize: "var(--text-editorial)" }}
            >
              Let&apos;s create something
              <br />
              extraordinary.
            </h2>

            <div className="space-y-8">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-neutral-100/30 mb-3">
                  Start a Conversation
                </span>
                <a
                  href="mailto:visioncraftstudio22@gmail.com"
                  className="text-electric text-xl md:text-2xl font-bold inline-block hover:text-electric-dark transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-electric after:origin-bottom-right hover:after:origin-bottom-left hover:after:scale-x-0 after:transition-transform after:duration-500 pb-1"
                >
                  visioncraftstudio22@gmail.com
                </a>
                <a
                  href="tel:7887962110"
                  className="block mt-4 text-neutral-100/70 hover:text-electric transition-colors"
                >
                  7887962110
                </a>
              </div>

              <div className="flex gap-8 text-sm font-medium">
                <a href="#" className="text-neutral-100/50 hover:text-neutral-100 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-neutral-100/50 hover:text-neutral-100 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-neutral-100/50 hover:text-neutral-100 transition-colors">
                  Behance
                </a>
              </div>
            </div>
          </div>

          {/* Right 40% — Navigation */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col sm:flex-row gap-16 lg:gap-16 pt-2">
            {/* Services */}
            <nav aria-label="Services" className="flex-1">
              <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-neutral-100/30 mb-6">
                Services
              </span>
              <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-100/60">
                <li>
                  <Link href="#" className="hover:text-electric transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-4" />
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-electric transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-4" />
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-electric transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-4" />
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-electric transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-4" />
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-electric transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-electric transition-all duration-300 group-hover:w-4" />
                    3D Visualization
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company" className="flex-1">
              <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-neutral-100/30 mb-6">
                Company
              </span>
              <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-100/60">
                <li>
                  <Link href="#" className="hover:text-neutral-100 transition-colors">
                    About Studio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-neutral-100 transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-neutral-100 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li className="pt-4">
                  <Link href="#" className="hover:text-neutral-100 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-neutral-100 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-100/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[10px] text-neutral-100/40 uppercase tracking-[0.2em] font-mono">
            &copy; {new Date().getFullYear()} VisionCraft Studio
          </p>
          <p className="text-[10px] text-neutral-100/40 uppercase tracking-[0.2em] font-mono">
            Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  )
}
