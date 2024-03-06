import React from 'react'
import { Card } from './Card';
import { basker, poppins } from '@/fonts/fonts';
import styles from './LawyersForYour.module.css'

export const LawyersForYour = () => {
  return (
    <section className={styles.section}>
          <div className={styles.block}>
              <div className={styles.text__block}>
              <h1 className={`${styles.title} ${basker.className}`}>Why choose our <br /> lawyers for your <br /> sponsor licence?</h1>
              <a className={styles.button} href="">Apply for a licence</a>
            </div>
            <div className={styles.card__double}>
              <Card title={'Speed'} decs={<p className={`${styles.card__desc} ${poppins.className}`}>Quick decision on your <br /> application</p>} />
              <Card title={'Transparency'} decs={''} />
        </div>
        </div>
        <div className={styles.list}>
             
              <Card title={'Results Driven'} decs={''} />
              <Card title={'20+ Years Experience'} decs={''} />
              <Card title={'Fixed Fees'} decs={''} />
              <Card title={'Ongoing Support'} decs={''} />
        </div>
    </section>
  )
}

