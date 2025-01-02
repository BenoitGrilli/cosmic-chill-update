"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const TextDescription = () => {
  const router = useRouter();

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-400">Discover Cosmic Chill</h2>
      <p className="text-lg text-gray-200 max-w-2xl">
        Embark on a journey through distant worlds with our unique digital art collection. 
        Own an exclusive beach in the metaverse and join a community of space explorers 
        seeking digital serenity.
      </p>
      <div className="flex gap-4 mt-6">
        <Button 
          variant="default"
          size="lg"
          onClick={() => router.push('/mint')}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Mint your NFT
        </Button>
      </div>
    </div>
  );
};

export default TextDescription; 