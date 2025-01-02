"use client";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import FloatingAstronaut from "@/components/main-page/floating-astronaute-animation";
import { CarouselAnimation } from "@/components/animation/carousel-animation";
import Footer from "@/components/naviguation/footer";
import AnimatedHeroText from "@/components/main-page/text-animation";
import TextDescription from "@/components/main-page/text-description";
import ImageCarousel from "@/components/main-page/carrousel";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollToPlugin);

export default function MainPage() {
  const secondSectionRef = useRef<HTMLElement | null>(null);

  const backgroundStyle = {
    backgroundImage: "url('/images/background-hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  const scrollToSection = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: secondSectionRef.current || 0 },
      ease: "power2.inOut"
    });
  };

  return (
    <div className="flex flex-col" style={backgroundStyle}>
      <section className="h-screen text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            <div>
              <FloatingAstronaut />
            </div>
            <div className="space-y-6">
              <AnimatedHeroText />
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6"
                variant="default"
                size="lg"
                onClick={scrollToSection}
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section ref={secondSectionRef} className="h-screen text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full justify-items-center">
            <div className="max-w-xl">
              <TextDescription />
            </div>
            <div>
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}