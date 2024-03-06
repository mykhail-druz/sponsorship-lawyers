import styles from "./Feedback.module.css";
import { poppins, basker } from "@/fonts/fonts";
import Stars from '@/icons/feedback/stars.svg'
import Quot from '@/icons/feedback/quot.svg'

import React, { ReactNode } from 'react'

interface CardProps {
    name: string;
    desc: ReactNode
}

export const Card: React.FC<CardProps> = ({ name, desc }) => {
    return ( 
        <div className={`${styles.card__body} ${poppins.className}`}>
            <Stars />
            <Quot />
            <p className={styles.desc}>{desc}</p>
            <p className={styles.name}>{name}</p>
        </div>
     );
}
