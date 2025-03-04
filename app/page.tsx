import Header from "@/components/Header";
import Features from "@/components/LandingPage/Features";
import HeroSection from "@/components/LandingPage/HeroSection";

export default function Home() {
  return (
    <>
      <div className="grid-background"></div>
      <Header />

      <main className="min-h-screen">
        <HeroSection />
        <Features />
      </main>
    </>
  );
}
