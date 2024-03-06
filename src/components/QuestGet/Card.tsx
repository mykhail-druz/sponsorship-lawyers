import React, { ReactNode } from 'react'
import styles from './QuestGet.module.css'
import { basker, poppins } from '@/fonts/fonts';
interface CardProps {
    title: string;
    icon:ReactNode
}

export const Card: React.FC<CardProps> = ({ title, icon }) => {
  return (
      <div className={styles.card__body}>
      {icon}
      <p className={`${styles.card__title} ${poppins.className}`}>{title}</p>
    </div>
  )
}

