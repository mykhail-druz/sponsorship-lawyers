"use client";
import React, { useEffect, useState } from "react";
import styles from "./Feedback.module.css";
import Google from "@/icons/feedback/google.svg";
import Trust from "@/icons/feedback/trustpilot.svg";
import CircleLeft from "@/icons/feedback/CircleLeft.svg";
import CircleRight from "@/icons/feedback/CircleRight.svg";
import { Card } from "./Card";
import { motion } from "framer-motion";

export const Feedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  const cards = [
    {
      name: "Sule Inan",
      desc: "I had a great experience with all the team at Sponsorship Solicitors and especially Miss Sibel and Fatma. They have been amazing support to me, my",
    },
    {
      name: "Guarav Sarin",
      desc: "Working with Sponsorship Lawyers has been a delightful experience. Both Sibel and Fatma have helped me through the highly complex process of applying for my Global",
    },
    {
      name: "Alara H",
      desc: "It has been an absolutely pleasure to work with these guys throughout the sponsor licence application of my firm and the skilled worker visas for my",
    },
    {
      name: "Zain Hotiana",
      desc: "Sponsorship Lawyers dealt with my application efficiently and in a timely manner. My initial consultation was with Fatma and she explained the process, cost and timeframe",
    },
    {
      name: "Arun Aggarwal",
      desc: "The team at Sponsorship Lawyers have been excellent from start to finish. Our innovator application was delayed, due to the mix up with the Home Office",
    },
  ];

  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setVisibleCardsCount(1);
    } else if (width >= 768 && width < 1024) {
      setVisibleCardsCount(2);
    } else {
      setVisibleCardsCount(3);
    }
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const swipe = (newDirection: number) => {
    let newIndex = currentSlide + newDirection;

    if (newIndex < 0) {
      newIndex = (cards.length - visibleCardsCount) + newIndex;
    } else if (newIndex > cards.length - visibleCardsCount) {
      newIndex = 0;
    }

    setCurrentSlide(newIndex);
  };

  let xPosition = 0;
  if (visibleCardsCount === 1) {
    xPosition = (-currentSlide * 108.5); 
  } else {
    xPosition = (-currentSlide * 106) / visibleCardsCount;
  }
  const cardWidthPercentage = 100 / visibleCardsCount;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Our clients feedback</h1>
        <div className="flex space-x-4 md:space-x-12 px-4 md:px-0">
          <Google />
          <Trust />
        </div>
        <div className={`overflow-hidden md:w-full max-w-[100vw] px-2`}>
          <motion.div
            className="flex space-x-8 w-full"
            animate={{ x: `${xPosition}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ width: `${100}%`, display: "flex" }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex space-x-4 md:space-x-8 md:w-1/3"
                style={{ width: `${cardWidthPercentage}%`, flex: "0 0 auto" }}
              >
                <Card name={card.name} desc={card.desc} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className={styles.nav__block}>
          <button className={styles.nav__left} onClick={() => swipe(-1)}>
            <CircleLeft />
          </button>
          <button className={styles.nav__right} onClick={() => swipe(1)}>
            <CircleRight />
          </button>
        </div>
      </div>
    </section>
  );
};
