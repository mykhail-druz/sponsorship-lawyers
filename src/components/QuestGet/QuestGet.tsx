import React from "react";
import styles from "./QuestGet.module.css";
import { Card } from "./Card";
import { basker, poppins } from "@/fonts/fonts";
import Vat from "@/icons/vat.svg";
import State from "@/icons/statements.svg";
import Umbrella from "@/icons/umbrella.svg";
import Account from "@/icons/accounts.svg";
import House from "@/icons/house.svg";
import Docs from "@/icons/docs.svg";

export const QuestGet = () => {
  return (
    <section className={styles.section}>
      <div className={styles.text__block}>
        <h1 className={`${styles.title} ${basker.className}`}>
          Can my company get a <br /> sponsor licence
        </h1>
        <p className={`${styles.desc} ${poppins.className}`}>
          Subject to your business meeting the eligibility requirements and you
          can provide the required <br /> documentation, we can assist you with
          your sponsor licence project.
          <br /> The types of documents we require will depend on the nature,
          size and complexity of your business. For <br /> example, if you are a
          financial institution or a healthcare provider, chances are you would
          be a <br /> regulated/monitored business. If this is the case, the
          documents you need to provide will differ.
        </p>
      </div>
      <div className={styles.content}>
        <h2 className={`${styles.subtitle} ${basker.className}`}>
          Any Four documents out of the Six below.
        </h2>
        <div className={`${styles.documents} ${poppins.className}`}>
          <Card title={"VAT Certificate"} icon={<Vat />} />
                  <Card title={"Bank Statements"} icon={<State />} />
                  <Card title={"Liability Insurance"} icon={<Umbrella />} />
                  <Card title={"Annual Accounts"} icon={<Account />} />
                  <Card title={"Lease or proof of ownership"} icon={<House />} />
                  <Card title={"Paye Document"} icon={<Docs />} />
        </div>
        <a className={`${styles.button} ${poppins.className}`} href="">
          Free Consultation
        </a>
      </div>
    </section>
  );
};
