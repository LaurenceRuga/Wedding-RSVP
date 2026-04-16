import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStorySection from "./components/OurStorySection";
import GallerySection from "./components/GallerySection";
import TimelineSection from "./components/TimelineSection";
import WeddingPartySection from "./components/WeddingPartySection";
import DetailsSection from "./components/DetailsSection";
import DressCodeSection from "./components/DressCodeSection";
import RSVPSection from "./components/RSVPSection";
import Footer from "./components/Footer";
import BackgroundMusicToggle from "./components/BackgroundMusicToggle";

function App() {
  return (
    <div className="min-h-screen text-[#FAF7F2]">
      <Navbar />
      <Hero />
      <OurStorySection />
      <GallerySection />
      <TimelineSection />
      <WeddingPartySection />
      <DetailsSection />
      <DressCodeSection />
      <RSVPSection />
      <Footer />
      <BackgroundMusicToggle />
    </div>
  );
}

export default App;
