import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VisionCraft Studio | One studio. Every asset your brand needs.",
  description: "Websites, design, video, marketing, and visualization — built and managed by one team, not four freelancers.",
  openGraph: {
    title: "VisionCraft Studio | One studio. Every asset your brand needs.",
    description: "Websites, design, video, marketing, and visualization — built and managed by one team, not four freelancers.",
    type: "website",
    locale: "en_IN",
    siteName: "VisionCraft Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,900&f[]=switzer@400,500,600,700,300,800,900,100,200&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-cabinet-grotesk: 'Cabinet Grotesk', sans-serif;
            --font-switzer: 'Switzer', sans-serif;
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VisionCraft Studio",
              description: "Full-service creative-tech studio — websites, design, video, marketing, and visualization.",
              url: "https://visioncraft.studio",
              contactPoint: {
                "@type": "ContactPoint",
                email: "visioncraftstudio22@gmail.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://instagram.com/visioncraftstudio",
                "https://linkedin.com/company/visioncraftstudio",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
