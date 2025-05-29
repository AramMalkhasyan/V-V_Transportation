'use client'

import styles from './partners.module.css';
import Image from "next/image";
import zeekr from "../../images/Zeekr5.png";
import bmw from "../../images/Bmw.png";
import byd from "../../images/BYD.png";
import lixiang from "../../images/lixiang.jpeg";
import landRover from "../../images/LandRover2.png";
import mercedes from "../../images/Mercedes.png";
import porsche from "../../images/Porsche.png";
import rollsRoyce from "../../images/RollsRoyce.png";
import geely from "../../images/Geely.png";
import hongqi from "../../images/Hongqi.png";
import {useEffect, useRef, useState} from "react";
import { useTranslations } from 'next-intl';

export default function Partners() {
const partners = [
    {
        mark: "zeekr",
        logo: zeekr,
        id: 123
    },
    {
        mark: "byd",
        logo: byd,
        id: 124
    },
    {
        mark: "hongqi",
        logo: hongqi,
        id: 125
    },
    {
        mark: "geely",
        logo: geely,
        id: 126
    },
    {
        mark: "lixiang",
        logo: lixiang,
        id: 128
    },
    {
        mark: "mercedes",
        logo: mercedes,
        id: 130
    },
    {
        mark: "porsche",
        logo: porsche,
        id: 132
    },
    {
        mark: "land rover",
        logo: landRover,
        id: 134
    },
    {
        mark: "bmw",
        logo: bmw,
        id: 135
    },
    {
        mark: "rolls royce",
        logo: rollsRoyce,
        id: 136
    },

];

    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const t = useTranslations("Homepage")
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => {
            if (blockRef.current) {
                observer.unobserve(blockRef.current);
            }
        };
    }, []);


    return (
        <div className={styles.partners_container}>
            <div className={styles.layer}>
                <h1
                    className={isVisible ? styles.partner_h1 : styles.partner_h1_not_visible}
                    ref={blockRef}
                >
                    {t("ourPartners")}
                </h1>
                <div className={styles.partner_inner_container} ref={blockRef}>
                    {partners.map((partner) => (
                        <div className={styles.image_inner_container} key={partner.id}>
                            <Image
                                src={partner.logo}
                                alt="no photo"
                                className={isVisible ? styles.partner_logo_viewed : styles.partner_logo}
                                
                            />
                            <div></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
