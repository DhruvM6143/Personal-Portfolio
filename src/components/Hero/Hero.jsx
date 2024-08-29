import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Dhruv</h1>
                <p className={styles.description}>I'm a Mern-stack Developer with the 1 Year of Experience using React and Node.js. Reach Out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:dhruvmm098@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/Boy2.png")} alt="Hero Image of Dhruv Madaan" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero