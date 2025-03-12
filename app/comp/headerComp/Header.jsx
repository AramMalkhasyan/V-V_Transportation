'use client'

import { usePathname } from 'next/navigation';
import {useState, useEffect} from "react";
import styles from './header.module.css'
import Image from "next/image";
import logo from "../../Logo/vbv1.png"
import Link from "next/link";



export default function Home() {
    const [headerFixed, setHeaderFixed] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 20) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <>
            <div className={headerFixed ?  styles.container : styles.container_not_fixed}>
                <div className={styles.header_container}>
                    <Link
                        href="/"
                        className={styles.logo_container}
                    >
                        <Image
                            src={logo}
                            height={75}
                            width={100}
                            alt="oops"
                            className={styles.test}
                        />
                    </Link>
                    <div className={styles.links}>
                        <Link
                            href="/"
                            className={pathname === '/' ? styles.active : styles.menu_item}
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className={pathname === '/services' ? styles.active : styles.menu_item}
                        >
                            Services
                        </Link>
                        <Link
                            href="/aboutUs"
                            className={pathname === '/aboutUs' ? styles.active : styles.menu_item}
                        >
                            About us
                        </Link>
                        <Link
                            href="/contactUs"
                            className={pathname === '/contactUs' ? styles.active : styles.menu_item}
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/gallery"
                            className={pathname === '/gallery' ? styles.active : styles.menu_item}
                        >
                            Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
