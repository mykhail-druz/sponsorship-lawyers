import { SponsorLicences, QuestGet, Footer, Header } from "@/components";
import AboutUs from "@/components/AboutUs/AboutUs";
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
