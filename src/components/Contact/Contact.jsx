import React from 'react'


import styles from './Contact2.module.css';
function Contact() {
    return (
        <section className={styles.contactme} id='Contact'>
            <h2>Contact Me</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <div className={styles.contactdetails}>
                <div className={styles.contactitem}>
                    <h4>Email:</h4>
                    <p><a href="mailto:dhruvmm098@gmail.com">dhruvmm098@gmail.com</a></p>
                </div>
                <div className={styles.contactitem}>
                    <h4>LinkedIn:</h4>
                    <p><a href="https://www.linkedin.com/in/dhruv-madaan-b73318228" rel="LinkdinProfile">LinkedIn Profile</a></p>
                </div>
                <div className={styles.contactitem}>
                    <h4>GitHub:</h4>
                    <p><a href="https://github.com/Dhruv6143" rel="Github">GitHub Profile</a></p>
                </div>

            </div>
        </section>
    )
}

export default Contact