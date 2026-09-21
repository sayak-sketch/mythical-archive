import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Reimagining Memory | Mythic Society Archive',
  description: 'A digital counter-archive project by Abhipsa Ghosh exploring the domiciliation of memory.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans flex flex-col min-h-screen relative">
        
        {/* The Archival Grain Texture Overlay */}
        <div className="noise-overlay"></div>
        
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        
      </body>
    </html>
  )
}