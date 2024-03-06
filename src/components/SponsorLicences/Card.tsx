import React, { ReactNode } from 'react'
import styles from './SponsorLicences.module.css'
import { basker, poppins } from '@/fonts/fonts';
interface CardProps {
    title: ReactNode;
   desc:ReactNode;
}

export const Card: React.FC<CardProps> = ({ title,desc }) => {
  return (
      <div className={styles.card__body}>
          {title}
          {desc}
    </div>
  )
}

