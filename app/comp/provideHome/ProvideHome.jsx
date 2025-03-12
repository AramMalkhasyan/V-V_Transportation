'use client'

import styles from './provideHome.module.css';
import Image from "next/image";
import worldMap from '../../images/worldMap.png';
import { useEffect, useRef, useState } from "react";
import HomeService from "../homeService/HomeService";


export default function ProvideHome() {
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
        <div className={styles.container}>
            <div className={styles.layer}>
            <div
                className={isVisible ? styles.home_service_container : styles.home_service_isNotVisible}
                ref={blockRef}
            >
                <div>
                    <Image
                        className={styles.image}
                        src={worldMap}
                        alt="no Photo"
                    />
                </div>
                <div className={styles.provide_content}>
                    <h1 className={styles.provide_header}>
                        We Provide Service Across The Globe
                    </h1>
                    <p>
                        We offer a Global Logistics Network with our worldwide offices
                        and also high quality distribution facilities which are staffed
                        by dedicated teams of the top of experts. We have more than 30
                        years of experiences in this field.
                    </p>
                </div>
            </div>
            <HomeService />
            </div>
        </div>
    );
}