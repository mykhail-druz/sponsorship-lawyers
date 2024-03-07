import React from "react";
import { Card } from "./Card";
import { basker, poppins } from "@/fonts/fonts";
import styles from "./LawyersForYour.module.css";

export const LawyersForYour = () => {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <div className={styles.text__block}>
          <h1 className={`${styles.title} ${basker.className}`}>
            Why choose our  lawyers for your sponsor licence?
          </h1>
          <a className={styles.button} href="#contact">
            Apply for a licence
          </a>
        </div>
        <div className={styles.card__double}>
          <Card
            title={"Speed"}
            decs={
              <p className={`${styles.card__desc} ${poppins.className}`}>
                Quick decision on your <br /> application
              </p>
            }
          />
          <Card
            title={"Transparency"}
            decs={
              <p className={`${styles.card__desc} ${poppins.className}`}>
                you know exactly what <br /> is going on
              </p>
            }
          />
        </div>
      </div>
      <div className={styles.list}>
        <Card
          title={"Results Driven"}
          decs={
            <p className={`${styles.card__desc} ${poppins.className}`}>
              we will get you results
            </p>
          }
        />
        <Card
          title={"20+ Years Experience"}
          decs={
            <p className={`${styles.card__desc} ${poppins.className}`}>
              expert lawyers
            </p>
          }
        />
        <Card
          title={"Fixed Fees"}
          decs={
            <p className={`${styles.card__desc} ${poppins.className}`}>
              nothing hidden with us
            </p>
          }
        />
        <Card
          title={"Ongoing Support"}
          decs={
            <p className={`${styles.card__desc} ${poppins.className}`}>
              with you from A-Z
            </p>
          }
        />
      </div>
    </section>
  );
};
