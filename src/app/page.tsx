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
  Feedback,
  ButtonUp,
} from "@/components";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <ButtonUp />
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
