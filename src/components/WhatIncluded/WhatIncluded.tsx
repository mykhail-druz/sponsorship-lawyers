import React from "react";
import styles from "./WhatIncluded.module.css";
import { basker, poppins } from "@/fonts/fonts";
import { Card } from "./Card";
import UserList from "@/icons/includedBlock/UserList.svg";
import CvLogo from "@/icons/includedBlock/ReadCvLogo.svg";
import Document from "@/icons/includedBlock/File.svg";
import Gavel from "@/icons/includedBlock/Gavel.svg";

export const WhatIncluded = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text__block}>
        <h1 className={`${basker.className} ${styles.title}`}>
          What is included in our <br /> sponsor licence service?
        </h1>
        <a className={`${poppins.className} ${styles.button}`} href="">
          Apply for a licence
        </a>
      </div>
      <div className={styles.grid__list}>
        <Card
          title={
            <p className={`${styles.card__title} ${poppins.className}`}>
              Crucial review of all <br /> documents and evidence
            </p>
          }
          icon={<UserList />}
        />
        <Card
          title={
            <p className={`${styles.card__title} ${poppins.className}`}>
              A detailed, professional <br />
              cover letter 
            </p>
          }
          icon={<CvLogo />}
        />
        <Card
          title={
            <p className={`${styles.card__title} ${poppins.className}`}>
              Licence compliance advice
            </p>
          }
          icon={<Gavel />}
        />
        <Card
          title={
            <p className={`${styles.card__title} ${poppins.className}`}>
              Assistance with <br /> the completion of the online <br /> application. 
            </p>
          }
          icon={<Document />}
        />
      </div>
    </section>
  );
};
