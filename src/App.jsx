import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStorySection from "./components/OurStorySection";
import TimelineSection from "./components/TimelineSection";
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
      <TimelineSection />
      <DetailsSection />
      <DressCodeSection />
      <RSVPSection />
      <Footer />
      <BackgroundMusicToggle />
    </div>
  );
}

export default App;
