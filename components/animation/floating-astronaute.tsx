"use client";
import React, { useRef, useEffect } from "react";
import Image from 'next/image';
import { gsap, Power1 } from "gsap";

const FloatingAstronaut = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const image = imgRef.current;
        gsap.fromTo(
            image,
            { y: 0 },
            {
                y: 80,
                duration: 1.4,
                ease: Power1.easeInOut,
                yoyo: true,
                repeat: -1,
            }
        );
    }, []);

    return (
        <Image
            ref={imgRef}
            width={500}
            height={500}
            src="/images/chilling astronaut.png"
            alt="Chilling Astronaut"
        />
    );
};

export default FloatingAstronaut;
