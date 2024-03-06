import { SponsorLicences, QuestGet } from "@/components";
import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <div className="background__color">
      <AboutUs />
      <SponsorLicences />
      <QuestGet />
      <Footer />
      </div>
    </main>
  );
}
