import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-neutral-950 px-5 md:px-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[50vw] h-[50vw] bg-electric/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="font-display font-bold text-9xl md:text-[15rem] leading-none tracking-tighter text-neutral-950/10 mb-4">
          404
        </h1>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6">
          Page not found
        </h2>
        <p className="text-neutral-950/60 max-w-md text-lg mb-10">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center h-14 px-8 bg-neutral-950 text-white font-bold font-display text-lg tracking-wide hover:bg-electric transition-colors shadow-xl"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
