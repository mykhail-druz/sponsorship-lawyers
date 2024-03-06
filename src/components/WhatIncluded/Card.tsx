import React, { ReactNode } from 'react'
import styles from './WhatIncluded.module.css'
import { basker, poppins } from '@/fonts/fonts';
interface CardProps {
  title: ReactNode;
    icon:ReactNode
}

export const Card: React.FC<CardProps> = ({ title, icon }) => {
  return (
      <div className={styles.card__body}>
      <div className={styles.icon__bg}>{icon}</div>
      {title}
    </div>
  )
}

