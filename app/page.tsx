import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Wallet } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FloatingAstronaut from "@/components/animation/floating-astronaute"

export default function MainPage() {
  const nfts = [
    { id: 1, name: "Nebula Dreams", image: "/placeholder.svg?height=400&width=400" },
    { id: 2, name: "Lunar Lounge", image: "/placeholder.svg?height=400&width=400" },
    { id: 3, name: "Comet Cafe", image: "/placeholder.svg?height=400&width=400" },
    { id: 4, name: "Starry Night", image: "/placeholder.svg?height=400&width=400" },
    { id: 5, name: "Galactic Glow", image: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-indigo-800">
        <Link className="flex items-center justify-center" href="#">
          <Moon className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">Cosmic Chill</span>
        </Link>
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Mint
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            My Collection
          </Link>
          <Button variant="outline" size="sm">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Cosmic background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0"
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
                Welcome To Cosmic Chill
              </h1>
              <FloatingAstronaut/>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl bg-black bg-opacity-50 p-4 rounded-lg">
                Discover and collect serene NFTs inspired by the tranquil beauty of the cosmos. Unwind with art that's out of this world.
              </p>
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