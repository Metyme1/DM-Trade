import { NavbarDemo } from "@/components/ui/navbar";
import HeroBackground from "@/components/section/HeroSection";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavbarDemo />
      <HeroBackground />
      <Footer />
    </main>
  );
}
