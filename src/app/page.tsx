import Navbar from "@/component/ui/navbar";
import HeroBackground from "@/component/section/HeroSection";
import Footer from "@/component/ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroBackground />
      <Footer />
    </main>
  );
}
