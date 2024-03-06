import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <AboutUs />
      <Footer />
    </main>
  );
}
