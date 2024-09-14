'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Nft = {
  id: number
  name: string
  creator: string
  price: string
  image: string
  status: string
}

const myNfts: Nft[] = [
  { id: 1, name: "Cosmic Dreamer #1", creator: "ArtistX", price: "0.5 ETH", image: "/images/images-carousel/1.png", status: "owned" },
  { id: 2, name: "Digital Horizon #7", creator: "CryptoY", price: "0.8 ETH", image: "/images/images-carousel/1.png", status: "owned" },
  { id: 3, name: "Neon Nights #3", creator: "PixelZ", price: "0.3 ETH", image: "/images/images-carousel/1.png", status: "for sale" },
  { id: 4, name: "Abstract Thoughts #12", creator: "MindBender", price: "1.2 ETH", image: "/images/images-carousel/1.png", status: "owned" },
  { id: 5, name: "Futuristic Feline #5", creator: "CatLover", price: "0.6 ETH", image: "/images/images-carousel/1.png", status: "for sale" },
  { id: 6, name: "Quantum Quilt #9", creator: "ByteWeaver", price: "0.9 ETH", image: "/images/images-carousel/1.png", status: "owned" },
]

export default function MyCollectionPage() {
  const [selectedNft, setSelectedNft] = useState<Nft | null>(null)

  return (
    <div className="container mx-auto py-8 min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">My NFT Universe</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-1000">
        <AnimatePresence>
          {myNfts.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden bg-purple-900/50 backdrop-blur-md border-2 border-purple-500 hover:border-purple-300 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:rotate-3"
                onClick={() => setSelectedNft(nft)}
              >
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
                  <CardTitle className="text-lg mb-2 text-purple-200">{nft.name}</CardTitle>
                  <p className="text-sm text-purple-300 mb-2">Created by {nft.creator}</p>
                  <Badge variant={nft.status === "for sale" ? "secondary" : "default"} className="bg-purple-700">
                    {nft.status === "for sale" ? "For Sale" : "Owned"}
                  </Badge>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-purple-600 hover:bg-purple-500">
                    {nft.status === "for sale" ? "Cancel Sale" : "List for Sale"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {selectedNft && (
        <NFTModal nft={selectedNft} onClose={() => setSelectedNft(null)} />
      )}
    </div>
  )
}

function NFTModal({ nft, onClose }: { nft: Nft, onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.5, rotateY: 180 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-purple-900 p-8 rounded-lg max-w-2xl w-full m-4 cursor-default"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative w-full h-64 mb-4">
          <Image
            src={nft.image}
            alt={nft.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-purple-200">{nft.name}</h2>
        <p className="text-purple-300 mb-4">Created by {nft.creator}</p>
        <p className="text-xl font-semibold mb-4 text-purple-100">{nft.price}</p>
        <Badge className="mb-4 bg-purple-700">{nft.status === "for sale" ? "For Sale" : "Owned"}</Badge>
        <div className="flex justify-between">
          <Button className="bg-purple-600 hover:bg-purple-500">
            {nft.status === "for sale" ? "Cancel Sale" : "List for Sale"}
          </Button>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
