import {
  SponsorLicences,
  QuestGet,
  Footer,
  Header,
  AboutUs,
  FAQ,
  HeroBanner,
  WhatIncluded, 
  LawyersForYour
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <div className="background__color">
      <AboutUs />
      <LawyersForYour />
      <SponsorLicences />
      <QuestGet />
      <WhatIncluded />
      <FAQ />
      <Footer />
      </div>
    </main>
  );
}
