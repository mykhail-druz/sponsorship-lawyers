import Image from "next/image";
import styles from "./AboutUs.module.css";
import { poppins, basker } from "@/fonts/fonts";

export const AboutUs = () => {
  const photo = [1, 2, 3, 4, 5];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text_1}>
          <h1 className={`${basker.className} ${styles.h1}`}>
            Does my company need a sponsor licence?
          </h1>
          <p className={`${poppins.className} ${styles.p}`}>
            Every UK based company, looking to employ EU / non-EU nationals,
            must obtain a sponsor licence. It allows your business to issue a
            certificate of sponsorship to your new (or existing) employee,
            permitting them to work for your business in an eligible role.
          </p>
        </div>
        <div className={styles.photo}>
          {photo.map((index) => (
            <div className="" key={index}>
              <img
                src={`/images/about/about_${index}.png`}
                alt={`About us image ${index}`}
                width={350}
                height={250}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        <div className={styles.second__block}>
          <div className={`${poppins.className} ${styles.text_2}`}>
            <h2 className={`${basker.className} ${styles.h2}`}>
              Hire from outside the UK or from within the UK.
            </h2>
            <p className={styles.p}>
              If you are looking to hire someone from within the UK, you can do
              so if the individual is currently on a temporary visa or if they
              work for another sponsoring company. You can also sponsor an
              international student studying in the UK; this allows your
              business to broaden its talent pool with access to global markets.
              If you want to improve your diversity, equality and inclusion
              (DE&I) credentials, sponsoring an employee is a fantastic way to
              achieve this, as you access a much broader set of skills from
              different backgrounds.
            </p>
            <button>
              <a href="#contact" className={styles.licence}>
                Apply for a licence
              </a>
            </button>
          </div>
          <Image
            height={460}
            width={500}
            className={styles.image__bottom}
            src="/images/about/about_6.png"
            alt="Hire"
          />
        </div>
      </div>
    </section>
  );
};
