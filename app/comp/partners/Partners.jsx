'use client'

import styles from './partners.module.css';
import Image from "next/image";
import audi from "../../images/Audi.png";
import bmw from "../../images/Bmw.png";
import kia from "../../images/Kia.png";
import ford from "../../images/Ford.png";
import lada from "../../images/Lada.png";
import landRover from "../../images/LandRover.png";
import mazda from "../../images/Mazda.png";
import mercedes from "../../images/Mercedes.png";
import nissan from "../../images/Nissan.png";
import porsche from "../../images/Porsche.png";
import reno from "../../images/Reno.png";
import rollsRoyce from "../../images/RollsRoyce.png";
import suzuki from "../../images/Suzuki.png";
import toyota from "../../images/Toyota.png";
import {useEffect, useRef, useState} from "react";


export default function Partners() {
const partners = [
    {
        mark: "audi",
        logo: audi,
        id: 123
    },
    {
        mark: "bmw",
        logo: bmw,
        id: 124
    },
    {
        mark: "kia",
        logo: kia,
        id: 125
    },
    {
        mark: "ford",
        logo: ford,
        id: 126
    },
    {
        mark: "lada",
        logo: lada,
        id: 127
    },
    {
        mark: "land rover",
        logo: landRover,
        id: 128
    },
    {
        mark: "mazda",
        logo: mazda,
        id: 129
    },
    {
        mark: "mercedes",
        logo: mercedes,
        id: 130
    },
    {
        mark: "nissan",
        logo: nissan,
        id: 131
    },
    {
        mark: "porsche",
        logo: porsche,
        id: 132
    },
    {
        mark: "reno",
        logo: reno,
        id: 133
    },
    {
        mark: "rolls royce",
        logo: rollsRoyce,
        id: 134
    },
    {
        mark: "toyota",
        logo: toyota,
        id: 135
    },
    {
        mark: "suzuki",
        logo: suzuki,
        id: 136
    },

];

    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
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
                    OUR PARTNERS
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
