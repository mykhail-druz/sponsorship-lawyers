import {
  SponsorLicences,
  QuestGet,
  Footer,
  Header,
  AboutUs,
  FAQ,
  HeroBanner,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <div className="background__color">
        <AboutUs />
        <SponsorLicences />
        <QuestGet />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
