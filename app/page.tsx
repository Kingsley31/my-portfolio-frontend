import { AboutSection } from "@/features/about-section/about-section";
import { HeroSection } from "@/features/hero-section/hero-section";
import { NavBarSection } from "@/features/nav/navbar-section";


export default function Home() {
  return (
    <div className="relative overflow-y-auto snap-y snap-mandatory scroll-smooth max-w-6xl overflow-x-hidden mx-auto">
      <NavBarSection />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
