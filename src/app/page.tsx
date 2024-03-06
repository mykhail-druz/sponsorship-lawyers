import {
  SponsorLicences,
  QuestGet,
  Footer,
  Header,
  AboutUs,
  FAQ,
  HeroBanner,
  WhatIncluded, 
  LawyersForYour,
  Feedback
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <div className="background__color">
      <AboutUs />
      <Feedback />
      <LawyersForYour />
      <SponsorLicences />
      <QuestGet />
      <WhatIncluded />
      <Feedback />
      <FAQ />
      <Footer />
      </div>
    </main>
  );
}
