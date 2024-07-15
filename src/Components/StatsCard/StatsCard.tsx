import React from "react";
import styles from './styles.module.scss'

interface StatsCardProps {
    title: String;
    value: number;
    //colocar uma interrogação na frente da variavel para declarar como opcional
}

export const StatsCard: React.FC<StatsCardProps> = ({title, value}) => {
    return(
        <article className={styles.stats_Card}>
            <h2>{title}</h2>
            <span>{value}</span>
        </article>
    )
}