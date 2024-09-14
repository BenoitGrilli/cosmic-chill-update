import React from "react";
import { Button } from "../ui/button";

export default function MintCard() {
    return (
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
            <header className="flex flex-col items-center justify-center pt-2">
                <h1 className="text-white ml-3 text-5xl font-medium pb-2">
                    GET YOUR COSMIC NFT
                </h1>
                <p className="text-white">contract address</p>
                <div className="text-white mt-5 text-2xl p-5 text-center">
                    50 / 100
                </div>
            </header>
            <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <h1 className="text-white text-2xl font-bold text-secondary">
                        Mint your NFT
                    </h1>
                    <p className="text-center leading-relaxed">
                        <span className="text-lg font-bold text-white mb-2">
                            Get your own Cosmic Chill NFT today and enjoy:
                        </span>
                        <ul className="list-disc pl-8 mb-8 text-left">
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
                    <p className="text-pink-500 mt-2 text-center">
                        You need 1 PLANET TOKEN (PLT) TO MINT 1 NFT
                    </p>
                    <p className="text-white text-2xl">100</p>
                    <Button>Mint NFT</Button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex w-full max-w-sm flex-col space-y-4">
                        <div className="aspect-square w-full overflow-hidden rounded-md">
                            <img
                                className="aspect-square object-cover"
                                src="images/mint-nft-gif.gif" 
                                alt="Preview GIF"
                            />
                        </div>

                        <div className="flex max-w-sm justify-center">
                            <p className="text-white text-lg">20</p>
                        </div>

                        <div className="flex flex-col justify-center">
                            {/* Uncomment and configure Web3Button if needed */}
                            {/* <Web3Button
                                contractAddress={contractAddress}
                                action={(contract) => {contract.erc721.mint(1)}}
                            >
                                Mint
                            </Web3Button> */}
                            <Button>Mint</Button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="text-white flex items-center justify-center space-x-2 p-6">
                <p className="text-sm">Powered by</p>
                <h1>Benoit GRILLI</h1>
            </footer>
        </div>
    );
}
