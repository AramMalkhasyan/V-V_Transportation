'use client'

import styles from './homeservice.module.css';
import clockIcon from '../../icons/clock.png';
import deliveryIcon from '../../icons/delivery.png';
import supportIcon from '../../icons/support.png';
import Image from "next/image";
import { useRef, useEffect, useState} from 'react';


export default function HomeService() {
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
        <div
            className={isVisible ? styles.home_service_container : styles.home_service_container_not_visible}
            ref={blockRef}
        >
            <div className={styles.service_container}>
                <Image
                    src={clockIcon}
                    alt="no Photo"
                />
                <h2>
                    Fast Service
                </h2>
                <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring
                    which I enjoy with my whole heart.
                </p>
            </div>
            <div className={styles.service_container}>
                <Image
                    src={deliveryIcon}
                    alt="no Photo"
                />
                <h2>
                    Safe Delivery
                </h2>
                <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which
                    I enjoy with my whole heart.
                </p>
            </div>
            <div className={styles.service_container}>
                <Image
                    src={supportIcon}
                    alt="no Photo"
                />
                <h2>
                    24/7 Support
                </h2>
                <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring
                    which I enjoy with my whole heart.
                </p>
            </div>
        </div>
    );
}
