import React from "react";

export default function NavBar() {
  return (
    <>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-centertext-white ml-3 text-2xl mb-4 md:mb-0"
            style={{ fontFamily: "'Anton', sans-serif" }}
            href="/home"
          >
            COSMIC CHILL
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className=" font-bold py-2 px-4 hover:text-blue-500" href="/home">
              HOME
            </a>
            <a className=" font-bold py-2 px-4 hover:text-blue-500" href="/gallery">
              GALLERY
            </a>
            <a className=" font-bold py-2 px-4 hover:text-blue-500" href="/mint">
              MINT
            </a>
            <a
              className=" font-bold py-2 px-4 hover:text-blue-500"
              href="/mycollection"
            >
              MY COLLECTION
            </a>
          </nav>


        
        </div>
      </header>
    </>
  );
}
