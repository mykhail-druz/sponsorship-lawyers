import styles from "./Footer.module.css";
import { poppins, basker } from "@/fonts/fonts";

import Logo from "@/icons/logo.svg";
import Email from "@/icons/footer/email.svg";
import Geo from "@/icons/footer/geo.svg";
import Phone from "@/icons/footer/phone.svg";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} ${poppins.className}`}>
      <div className={styles.container}>
        <div>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <div className={styles.navblock}>
            <Email />
            <p className={`${styles.p} ${basker.className}`}>Email us</p>
            <a className={styles.a} href="mailto:info@sponsorshiplawyers.co.uk">
              info@sponsorshiplawyers.co.uk
            </a>
          </div>
          <div className={styles.navblock}>
            <Geo />
            <p className={`${styles.p} ${basker.className}`}>Our location</p>
            <a
              className={styles.a}
              target="_blank"
              href="https://maps.app.goo.gl/eTbDMV1dAEgKApWJ6"
            >
              837 Manchester Road, Bradford, England, BD5 8LT United Kingdom
            </a>
          </div>
          <div className={styles.navblock}>
            <Phone />
            <p className={`${styles.p} ${basker.className}`}>Contact us</p>
            <a className={styles.a} href="tel:+4401618201101">
              0161 820 1101
            </a>
          </div>
        </nav>
        <div className={styles.description}>
          <p>
            Sponsorship Lawyers is trading names of Pearson Locke Ltd which is a
            limited company registered in England & Wales with registration
            number 12851925. A list of directors of the company is available for
            inspection at the registered office: 837 Manchester Road, Bradford,
            England, BD5 8LT. Authorised by the Solicitors Regulation Authority
            under Registration Number 807786. VAT number 384131407
          </p>
        </div>
      </div>
    </footer>
  );
};


