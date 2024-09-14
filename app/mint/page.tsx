import Footer from "@/components/naviguation/footer"
import MintCard from "@/components/mint/mint-card"

export default function MintPage() {


  const backgroundStyle = {
    backgroundImage: "url('/images/background-mint.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: "h-screen",
  };

  return (

    <div className="flex flex-col min-h-[100dvh]" style={backgroundStyle}>

      <main className="flex-1">
        <section className="w-full py-4 md:py-16 lg:py-22 xl:py-30 relative">
          
            <div className="flex flex-col items-center space-y-4 text-center">
              <MintCard/>
            </div>
         
        </section>
        
        
      </main>
      <Footer/>
      
    </div>

  )
}