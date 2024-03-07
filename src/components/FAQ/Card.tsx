"use client";
import React, { useState, ReactNode } from "react";
import styles from "./FAQ.module.css";
import Plus from "@/icons/FAQ/plus.svg";
import { poppins, basker } from "@/fonts/fonts";

interface CardProps {
  title: ReactNode;
  desc: ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`${styles.card}`} onClick={toggleOpen}>
      <div className={styles.card_title__container}>
        <h3
          className={`${isOpen ? styles.title_open : styles.title_closed} ${
            basker.className
          }`}
        >
          {title}
        </h3>
        <Plus className={`${isOpen ? styles.plus_open : styles.plus_closed}`} />
      </div>

      <p
        className={`${isOpen ? styles.open : styles.card_desc} ${
          poppins.className
        }`}
      >
        {desc}
      </p>
    </div>
  );
};
