import React, { ReactNode } from 'react'
import styles from './LawyersForYour.module.css'
import { averia, basker, poppins } from '@/fonts/fonts';
interface CardProps {
    title: string;
    decs: ReactNode
}

export const Card: React.FC<CardProps> = ({ title, decs }) => {
    return (
        <div className={styles.card__body}>
           
            <p className={`${styles.card__title} ${averia.className}`}>{title}</p>
            {decs}
        </div>
    )
}

