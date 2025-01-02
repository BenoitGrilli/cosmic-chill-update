import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MintCard() {
  return (
    <div className="mx-auto flex h-screen max-w-6xl flex-col">
      <header className="flex flex-col items-center justify-center pt-2">
        <h1 className="text-white ml-3 text-4xl font-medium">
          GET YOUR COSMIC NFT
        </h1>
        <p className="text-white">contract address</p>
        <div className="text-white mt-2 text-2xl text-center">
          50 / 100
        </div>
      </header>
      <Card className="flex-1 m-4 bg-black/20 border-none">
        <CardContent className="grid gap-4 p-4 md:grid-cols-2 md:p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-white text-2xl font-bold text-secondary">
              Mint your NFT
            </h1>
            <p className="text-center leading-relaxed">
              <span className="text-lg font-bold text-white">
                Get your own Cosmic Chill NFT today and enjoy:
              </span>
              <ul className="list-disc pl-8 mt-2 text-left">
                <li className="text-lg text-gray-200">
                  Access to a one-of-a-kind digital art collection
                </li>
                <li className="text-lg text-gray-200">
                  Exclusive ownership of a unique beach in the metaverse
                </li>
                <li className="text-lg text-gray-200">
                  A chance to join a community of like-minded space explorers
                </li>
              </ul>
            </p>
            <p className="text-pink-500 text-center">
              You need 1 PLANET TOKEN (PLT) TO MINT 1 NFT
            </p>
            <p className="text-white text-2xl">100</p>
            <Button
              variant="default"
              size="lg"
              className="bg-blue-500 hover:bg-blue-600"
            >
              Mint NFT
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-sm flex-col space-y-4">
              <div className="aspect-square w-full overflow-hidden rounded-md">
                <Image
                  src="/images/cosmic-chill-gif.gif"
                  alt="Preview NFT GIF"
                  width={400}
                  height={400}
                  className="aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}