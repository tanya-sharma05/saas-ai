import AiTools from "../components/home/AiTools"
import Footer from "../components/home/Footer"
import HeroSection from "../components/home/HeroSection"
import Navbar from "../components/home/Navbar"
import Plan from "../components/home/Plan"
import Testimonial from "../components/home/Testimonial"

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </>
  )
}

export default HomePage