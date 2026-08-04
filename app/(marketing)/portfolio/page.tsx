export default function PortfolioPage() {
  return (
    <div className="pt-40 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-neutral-950">Complete Portfolio</h1>
      <p className="text-neutral-500 mb-8 text-lg max-w-lg">We are currently updating our extended portfolio. Check back soon to see more of our award-winning projects.</p>
      <a href="/" className="bg-electric text-neutral-950 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform">
        Back to Home
      </a>
    </div>
  )
}
