import FloatingAstronaut from "@/components/main-page/floating-astronaute-animation"
import { CarouselAnimation } from "@/components/animation/carousel-animation"
import Footer from "@/components/naviguation/footer"
import AnimatedHeroText from "@/components/main-page/text-animation"
import TextDescription from "@/components/main-page/text-description"
import ImageCarousel from "@/components/main-page/carrousel"

export default function MainPage() {
  const backgroundStyle = {
    backgroundImage: "url('/images/background-hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div className="flex flex-col" style={backgroundStyle}>
      <section className="h-screen text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            <div>
              <FloatingAstronaut />
            </div>
            <div>
              <AnimatedHeroText />
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen text-white">
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