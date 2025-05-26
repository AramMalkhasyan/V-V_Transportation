'use client'

import { usePathname, useRouter } from 'next/navigation';
import {useState, useEffect} from "react";
import styles from './header.module.css'
import Image from "next/image";
import logo from "../../Logo/vbv1.png"
import Link from "next/link";
import { useTranslations } from 'next-intl';
import menuIcon from '../../icons/menu.png'



export default function Home({ locale }) {
    const [width, setWidth] = useState(0)
    const [headerFixed, setHeaderFixed] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(true);
    const [language, setLanguage] = useState(locale);
    
    

    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("Homepage");
    const setLocale = (locale) => {
        document.cookie = `locale=${locale}; path=/`;
        setLanguage(locale);
        router.refresh();
    };

    const handleCLick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
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
    useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
        }
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


      
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
                    <Image 
                            src={menuIcon}
                            alt=''
                            height={30}
                            width={30}
                            className={width <= 500 ? styles.menu : styles.menu_hide}
                            onClick={() => handleCLick()}
                        />
                    <div className={menuIsOpen ? styles.links : styles.links_hide}> 
                        <Link
                            href="/"
                            className={pathname === '/' ? styles.active : styles.menu_item}
                        >
                            {t("headerHome")}
                        </Link>
                        <Link
                            href="/services"
                            className={pathname === '/services' ? styles.active : styles.menu_item}
                        >
                             {t("headerServices")}
                        </Link>
                        <Link
                            href="/aboutUs"
                            className={pathname === '/aboutUs' ? styles.active : styles.menu_item}
                        >
                             {t("headerAboutUs")}
                        </Link>
                        <Link
                            href="/contactUs"
                            className={pathname === '/contactUs' ? styles.active : styles.menu_item}
                        >
                             {t("headerContactUs")}
                        </Link>
                        <Link
                            href="/gallery"
                            className={pathname === '/gallery' ? styles.active : styles.menu_item}
                        >
                             {t("headerGallery")}
                        </Link>
                        <select 
                            name="locale" 
                            value={language}
                            onChange={(e) => setLocale(e.target.value)}
                            className={styles.set_locale_selector}
                        >
                            <option value="en">EN</option>
                            <option value="am">AM</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}
