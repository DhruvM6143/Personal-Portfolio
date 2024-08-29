import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'

const NavBar = () => {
    const [menuOPen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.Navbar}>
            <a className={styles.title} href='/'>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOPen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt='menu-Btn' onClick={() => setMenuOpen(!menuOPen)} />
                <ul className={`${styles.menuItems} ${menuOPen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar