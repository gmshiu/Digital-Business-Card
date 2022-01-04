import React from "react";
import styles from "./About.css";

export default function About() {
    return (
        <main className={styles.about}>
            <nav>
            <h3 className={styles.header}>About</h3>
            <p className={styles.texts}>
            I am an upcoming Frontend developer with aspiration to help develop awesome Software and make everyones life easier. I try to keep up and learn the latest and the best technology
            </p>
            </nav>
        </main>
    )
}