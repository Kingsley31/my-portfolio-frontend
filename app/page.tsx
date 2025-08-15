import { AboutSection } from "@/features/about-section/about-section";
import { HeroSection } from "@/features/hero-section/hero-section";
import { NavBarSection } from "@/features/nav/navbar-section";


export default function Home() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-m-0 scroll-p-0 scroll-smooth max-w-6xl overflow-x-hidden mx-auto">
      <NavBarSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
