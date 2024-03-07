"use client";
import styles from "./HeroBanner.module.css";
import { poppins, basker } from "@/fonts/fonts";
import Check from "@/icons/CheckCircle.svg";
import { MyPhoneInput } from "../TelInput/input";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

export const HeroBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    position: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  
    try {
      // URL вебхука Zapier, который вы получили
      const webhookUrl = 'https://hooks.zapier.com/hooks/catch/13171226/3rfsz0u/';
  
      // Отправка данных формы на вебхук Zapier
      const response = await axios.post(webhookUrl, formData);
  
      // Проверка ответа от вебхука и уведомление пользователя
      if (response.status === 200) {
        toast.success("Message sent!");
        // Сброс данных формы после успешной отправки
        setFormData({
          name: "",
          phone: "",
          email: "",
          companyName: "",
          position: "",
        });
      } else {
        toast.error("Error!");
      }
    } catch (error) {
      toast.error("Connection error!");
    }
  };
  

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
        <form id="contact" onSubmit={handleSubmit} action="POST" className={styles.form}>
          <div className={styles.form__bg}>
            <p className={`${styles.title__form} ${basker.className}`}>
              Book Your Sponsor Licence Consultation
            </p>
            <div className={`${styles.content}`}>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.inputLarge} ${poppins.className}`}
                type="text"
                placeholder="Name"
                required
              />
              <div className={styles.input__block}>
                <MyPhoneInput
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${styles.inputBig} ${poppins.className}`}
                />
                <input
                  className={`${styles.inputSmall} ${poppins.className}`}
                  type="mail"
                  name="email"
                  placeholder="Email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.input__block}>
                <input
                  name="companyName"
                  className={`${styles.inputBig} ${poppins.className}`}
                  type="text"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <input
                  className={`${styles.inputSmall} ${poppins.className}`}
                  type="text"
                  placeholder="Your position in company"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className={`${styles.button} ${poppins.className}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
