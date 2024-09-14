import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import Link from "next/link"
import Image from "next/image"
import FloatingAstronaut from "@/components/animation/floating-astronaute-animation"
import HeroTextAnimation from "@/components/animation/hero-text-animation"

export default function MainPage() {
  const nfts = [
    { id: 1, name: "Nebula Dreams", image: "/placeholder.svg?height=400&width=400" },
    { id: 2, name: "Lunar Lounge", image: "/placeholder.svg?height=400&width=400" },
    { id: 3, name: "Comet Cafe", image: "/placeholder.svg?height=400&width=400" },
    { id: 4, name: "Starry Night", image: "/placeholder.svg?height=400&width=400" },
    { id: 5, name: "Galactic Glow", image: "/placeholder.svg?height=400&width=400" },
  ]


  const backgroundStyle = {
    backgroundImage: "url('/images/background-hero.jpg')",
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
              <HeroTextAnimation />
              <FloatingAstronaut />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Featured Cosmic Creations
            </h2>
            <div className="relative">
              <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap space-x-4">
                  {nfts.map((nft) => (
                    <Card key={nft.id} className="flex-none w-64 bg-indigo-950 border-indigo-800">
                      <CardContent className="p-4">
                        <Image
                          src={nft.image}
                          alt={nft.name}
                          width={400}
                          height={400}
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{nft.name}</h3>
                        <Button variant="secondary" size="sm" className="w-full">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-indigo-800">
        <p className="text-xs text-zinc-400">© 2023 Cosmic Chill. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>

  )
}