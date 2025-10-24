import Navbar from "@/components/pages/navbar";
import HeroSection from "@/components/section/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
}
