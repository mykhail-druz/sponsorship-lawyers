import React from "react";
import styles from "./SponsorLicences.module.css";
import { basker, poppins } from "@/fonts/fonts";
import { Card } from "./Card";

export const SponsorLicences = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroud__image} />
      <div className={styles.content}>
        <div>
          <h1 className={`${basker.className} ${styles.title}`}>
            What types of sponsor licences are available?
          </h1>
          <p className={`${poppins.className} ${styles.description}`}>
            Depending on your business, there are different sponsor licences. If
            your business <br /> meets the requirements, you can apply for one
            of the following categories:
          </p>
        </div>
        <div className={styles.grid__card}>
          <Card
            title={
              <h2 className={`${styles.card__title} ${basker.className}`}>
                Workers
              </h2>
            }
            desc={
              <p className={`${styles.card__desc} ${poppins.className}`}>
                for skilled, long term employment <br /> commonly under the
                Skilled <br /> Worker route
              </p>
            }
          />
          <Card
            title={
              <h2 className={`${styles.card__title} ${basker.className}`}>
                Temporary <br />
                workers
              </h2>
            }
            desc={
              <p className={`${styles.card__desc} ${poppins.className}`}>
                specific temporary <br /> employment
              </p>
            }
          />
          <Card
            title={
              <h2 className={`${styles.card__title} ${basker.className}`}>
                Education providers
              </h2>
            }
            desc={
              <p className={`${styles.card__desc} ${poppins.className}`}>
                to sponsor international
                <br /> students to study
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};
