import React from "react";
import styles from "./Info.css";

export default function Info() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img className={styles.img} src="beach-pic.png" width="300px" />
            </header>  
            <div className={styles.bio}>
            <h2 className={styles.name}>Godwin Mshiu</h2>
            <p className={styles.job}>Frontend Developer</p>
            <p className={styles.site}>mshiu-portfolio.netlify.app</p>
            <div className={styles.contacts}>
            <button className="email">Email <i ></i></button>
            <button className="linkedin">LinkedIn</button>
            </div>
            </div>
        </div>
    )
}