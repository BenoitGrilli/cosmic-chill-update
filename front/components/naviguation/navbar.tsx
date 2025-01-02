import React from "react";
import Link from "next/link";
import { Moon } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function NavBar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
      <Link className="flex items-center justify-center" href="#">
        <Moon className="h-6 w-6 mr-2" />
        <span className="font-bold text-xl">Cosmic Chill</span>
      </Link>
      <nav className="flex items-center space-x-4 sm:space-x-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/gallery">
          Gallery
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/mint">
          Mint
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/my-collection">
          My Collection
        </Link>
        <ConnectButton />
      </nav>
    </header>
  );
}