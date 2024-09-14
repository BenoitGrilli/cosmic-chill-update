import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import Link from "next/link"
import Image from "next/image"
import FloatingAstronaut from "@/components/animation/floating-astronaute-animation"
import HeroTextAnimation from "@/components/animation/hero-text-animation"
import { CarouselAnimation } from "@/components/animation/carousel-animation"
import Footer from "@/components/naviguation/footer"
import MintCard from "@/components/mint/mint-card"

export default function MintPage() {


  const backgroundStyle = {
    backgroundImage: "url('/images/background-mint.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "h-screen",
  };

  return (

    <div className="flex flex-col min-h-[100dvh]" style={backgroundStyle}>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <MintCard/>
            </div>
          </div>
        </section>
        
        
      </main>
      <Footer/>
      
    </div>

  )
}