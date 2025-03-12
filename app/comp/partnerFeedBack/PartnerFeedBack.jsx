'use client'

import styles from './partnerFeedBack.module.css'
import landRoverLogo from '../../images/LandRover.png'
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export default function PartnerFeedBack() {
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
        <div ref={blockRef} className={styles.container}>
            <div className={styles.layer}>
            <h1 className={isVisible ? styles.feedBack_h1 : styles.feedBack_h1_not_visible} ref={blockRef}>FEED BACK FROM OUR PARTNERS</h1>
            <div
                className={isVisible ? styles.feedBack_container : styles.feedBack_container_not_visible}
            >
                <div>
                    <Image
                        src={landRoverLogo}
                        alt="no photo"
                        className={styles.company_logo}
                    />
                </div>
                <div className={styles.feedBack_inner_container}>
                    <h2>Land Rover company name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut, autem ducimus error quis soluta totam unde! Ab debitis
                    </p>
                </div>
            </div>
            <div
                className={isVisible ? styles.feedBack_container_center : styles.feedBack_container_not_visible_center}
            >
                <div>
                    <Image
                        src={landRoverLogo}
                        alt="no photo"
                        className={styles.company_logo}
                    />
                </div>
                <div className={styles.feedBack_inner_container}>
                    <h2>Land Rover company name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aut, autem ducimus error quis soluta totam unde! Ab debitis
                    </p>
                </div>
            </div>
            </div>
            {/*<div*/}
            {/*    className={isVisible ? styles.feedBack_container : styles.feedBack_container_not_visible}*/}
            {/*>*/}
            {/*    <div>*/}
            {/*        <Image*/}
            {/*            src={landRoverLogo}*/}
            {/*            alt="no photo"*/}
            {/*            className={styles.company_logo}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={styles.feedBack_inner_container}>*/}
            {/*        <h2>Land Rover company name</h2>*/}
            {/*        <p>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*            Aut, autem ducimus error quis soluta totam unde! Ab debitis*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
