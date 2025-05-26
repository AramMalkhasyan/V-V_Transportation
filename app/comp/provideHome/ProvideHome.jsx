'use client'

import styles from './provideHome.module.css';
import Image from "next/image";
import worldMap from '../../images/woorldMap.png';
import { useEffect, useRef, useState } from "react";
import HomeService from "../homeService/HomeService";
import { useTranslations } from 'next-intl';

export default function ProvideHome() {
    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [viewMore, setViewMore] = useState(false);
    const t = useTranslations("Homepage");

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
                        {t("provideHome")}
                    </h1>
                    <p className={viewMore ? styles.provide_content_inner_show : styles.provide_content_inner}>
                        {t("provideHomeContent")}
                    </p>
                    {
                        viewMore ? 
                        <a 
                            onClick={() => setViewMore(false)} 
                            className={styles.show_more_less}
                        >
                            show less
                        </a>
                        :
                        <a 
                            onClick={() => setViewMore(true)}
                            className={styles.show_more_less}
                        >
                            show more
                        </a>
                    }
                </div>
            </div>
            <HomeService />
            </div>
        </div>
    );
}