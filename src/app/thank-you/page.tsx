import styles from "./thank-you.module.css";
import Success from "@/icons/thank-you/Vector.svg";
import { poppins } from "@/fonts/fonts";

export default function ThankYou() {
  return (
    <section className={`${styles.section} ${poppins.className}`}>
      <div className={styles.container}>
        <div className="flex justify-center">
          <Success />
        </div>
        <div className="text-center">
          <p className={styles.title}>Thank you</p>
          <p className="text-[16px] font-light mb-2">
            One of our team member will be in touch with you shortly
          </p>
          <p className="text-[16px] text-[#016122] font-light">
            Call Now : <a href="tel:+4401618201101">01618201101</a>
          </p>
        </div>
      </div>git
    </section>
  );
}
