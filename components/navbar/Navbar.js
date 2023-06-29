import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
    const links = [
        {
            id: 0,
            name: 'Home',
            href: '/'
        },

        {
            id: 1,
            name: "About",
            href: '/about'
        },
        {
            id: 2,
            name: "Blog",
            href: '/blog'
        },
        {
            id: 3,
            name: "Contact",
            href: '/contact'
        },
        {
            id: 4,
            name: "Dashboard",
            href: '/dashboard'
        },
        {
            id: 5,
            name: "Portfolio",
            href: '/portfolio'
        }

    ]
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div className={styles.links}>
                {
                    links.map((link) => {
                        return <Link key={link.id} className={styles.link} href={link.href}>{link.name}</Link>
                    })

                }
                <button className={styles.logout}>
                    logout
                </button>
            </div>

        </div>
    )
}

export default Navbar