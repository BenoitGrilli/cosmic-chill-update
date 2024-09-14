import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Simuler des données de NFT
const nfts = [
  { id: 1, name: "Cosmic Dreamer #1", creator: "ArtistX", price: "0.5 ETH", image: "/images/images-carousel/1.png" },
  { id: 2, name: "Digital Horizon #7", creator: "CryptoY", price: "0.8 ETH", image: "/images/images-carousel/2.png" },
  { id: 3, name: "Neon Nights #3", creator: "PixelZ", price: "0.3 ETH", image: "/images/images-carousel/3.png" },
  { id: 4, name: "Abstract Thoughts #12", creator: "MindBender", price: "1.2 ETH", image: "/images/images-carousel/4.png" },
  { id: 5, name: "Futuristic Feline #5", creator: "CatLover", price: "0.6 ETH", image: "/images/images-carousel/5.png" },
  { id: 6, name: "Quantum Quilt #9", creator: "ByteWeaver", price: "0.9 ETH", image: "/images/images-carousel/6.png" },
  { id: 7, name: "Ethereal Echo #15", creator: "SoundSmith", price: "0.7 ETH", image: "/images/images-carousel/7.png" },
  { id: 8, name: "Pixel Paradise #4", creator: "BitArtist", price: "0.4 ETH", image: "/images/images-carousel/8.png" },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">NFT Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <Card key={nft.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src={nft.image}
                  alt={nft.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg mb-2">{nft.name}</CardTitle>
              <p className="text-sm text-muted-foreground mb-2">Created by {nft.creator}</p>
              <Badge variant="secondary">{nft.price}</Badge>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}