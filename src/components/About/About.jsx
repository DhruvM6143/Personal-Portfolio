import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';

function About() {
    return (
        <section className={styles.container} id='About'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/Boy.png")} alt="Me Sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>I'm a frontend developer with experience in building optmized sites</p>

                        </div></li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server" />
                        <div className={styles.aboutItemText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>I've experience developing fast and optimised back-end systems and API's</p>

                        </div></li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="Server" />
                        <div className={styles.aboutItemText}>
                            <h3>
                                UI Designer
                            </h3>
                            <p>I've Designed multiple landing pages and have systems as well</p>

                        </div></li>

                </ul>
            </div>
        </section>
    )
}

export default About