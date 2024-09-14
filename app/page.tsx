import FloatingAstronaut from "@/components/animation/floating-astronaute-animation"
import { CarouselAnimation } from "@/components/animation/carousel-animation"
import Footer from "@/components/naviguation/footer"
import { Button } from "@/components/ui/button"

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
      <section className="text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:flex lg:items-center lg:gap-x-8">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <FloatingAstronaut />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Discover Cosmic Chill
            </h1>
            <p className="text-lg sm:text-xl">
              A unique collection of digital art that takes you on a journey to distant and unknown worlds, offering an unforgettable relaxation experience to escape the stress of everyday life.
            </p>
            <p>
              Owning a Cosmic Chill NFT means becoming a space explorer and enjoying exclusive ownership of a unique beach in the metaverse. Join our community to discover hidden wonders and interact with other NFT owners.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Get your own Cosmic Chill NFT today and enjoy:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to a one-of-a-kind digital art collection</li>
                <li>Exclusive ownership of a unique beach in the metaverse</li>
                <li>A chance to join a community of like-minded space explorers</li>
              </ul>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Your NFT Now
            </Button>
          </div>
        </div>
      </section>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <CarouselAnimation />
            </div>
          </div>
        </section>


      </main>
      <Footer />

    </div>

  )
}