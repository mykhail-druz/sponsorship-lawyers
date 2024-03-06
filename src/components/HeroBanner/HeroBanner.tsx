import styles from "./HeroBanner.module.css";
import { poppins, basker } from "@/fonts/fonts";
import Check from "@/icons/CheckCircle.svg";
import { MyPhoneInput } from "../TelInput/input";

export const HeroBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text__block}>
          <h1 className={`${basker.className} ${styles.title}`}>
            Need to employ
            <br />
            <span className={styles.dark__beige}>foreign workers?</span>
          </h1>
          <div className={styles.check__list}>
            <div className={styles.check__block}>
              <p className={`${styles.check} ${poppins.className}`}>
                <Check />
                Get a sponsor licence with us
              </p>
              <p className={`${styles.check} ${poppins.className}`}>
                <Check />
                Fixed fee application service
              </p>
            </div>
            <div className={styles.check__block}>
              <p className={`${styles.check} ${poppins.className}`}>
                <Check />
                Robust track record
              </p>
              <p className={`${styles.check} ${poppins.className}`}>
                <Check />
                Our lawyers have 20+ years experience
              </p>
            </div>
            <p className={`${styles.check} ${poppins.className}`}>
              <Check />
              Fully project managed sponsor licence
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img src="/images/hero/oisc.png" alt="" />
            <img src="/images/hero/ilpa.png" alt="" />
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.form__bg}>
            <p className={`${styles.title__form} ${basker.className}`}>
              Book Your Sponsor Licence Consultation
            </p>
            <div className={`${styles.content}`}>
              <input
                id="phone"
                className={`${styles.inputLarge} ${poppins.className}`}
                type="text"
                placeholder="Name"
              />
              <div className={styles.input__block}>
                <MyPhoneInput
                  className={`${styles.inputBig} ${poppins.className}`}
                />
                <input
                  className={`${styles.inputSmall} ${poppins.className}`}
                  type="mail"
                  placeholder="Email address"
                />
              </div>
              <div className={styles.input__block}>
                <input
                  className={`${styles.inputBig} ${poppins.className}`}
                  type="text"
                  placeholder="Company name"
                />
                <input
                  className={`${styles.inputSmall} ${poppins.className}`}
                  type="text"
                  placeholder="Your position in company"
                />
              </div>
            </div>
            <a href="" className={`${styles.button} ${poppins.className}`}>
              Submit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
