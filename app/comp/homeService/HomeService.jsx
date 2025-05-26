'use client'

import { useRef, useEffect, useState} from 'react';
import styles from './homeservice.module.css';
import clockIcon from '../../icons/clock.png';
import deliveryIcon from '../../icons/delivery.png';
import supportIcon from '../../icons/support.png';
import Image from "next/image";
import { useTranslations } from 'next-intl';



export default function HomeService() {
    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [fastIsVisible, setFastIsVisible] = useState(false);
    const [safeIsVisible, setSafeIsVisible] = useState(false);
    const [supportIsVisible, setSupportIsVisible] = useState(false);

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
                    {t("HomeServiceFast")}
                </h2>
                <p className={fastIsVisible ? styles.services_inner_fast_view : styles.services_inner_fast}>
                    {t("HomeServiceFastContent")}
                </p>
                {fastIsVisible ? 
                    <a 
                        onClick={() => setFastIsVisible(false)}
                        className={styles.show_more_less}
                    >
                        show less
                    </a>
                    :
                    <a 
                        onClick={() => setFastIsVisible(true)}
                        className={styles.show_more_less}
                    >
                        show more
                    </a>
                }
            </div>
            <div className={styles.service_container}>
                <Image
                    src={deliveryIcon}
                    alt="no Photo"
                />
                <h2>
                    {t("HomeServiceSafe")}
                </h2>
                <p className={safeIsVisible ? styles.services_inner_fast_view : styles.services_inner_fast}>
                    {t("HomeServiceSafeContent")}
                </p>
                {safeIsVisible ? 
                    <a 
                        onClick={() => setSafeIsVisible(false)}
                        className={styles.show_more_less}
                    >
                        show less
                    </a>
                    :
                    <a 
                        onClick={() => setSafeIsVisible(true)}
                        className={styles.show_more_less}
                    >
                        show more
                    </a>
                }
            </div>
            <div className={styles.service_container}>
                <Image
                    src={supportIcon}
                    alt="no Photo"
                />
                <h2>
                    {t("HomeServiceSupport")}
                </h2>
                <p className={supportIsVisible ? styles.services_inner_fast_view : styles.services_inner_fast}>
                    {t("HomeServiceSupportContent")}
                </p>
                {supportIsVisible ? 
                    <a 
                        onClick={() => setSupportIsVisible(false)}
                        className={styles.show_more_less}
                    >
                        show less
                    </a>
                    :
                    <a 
                        onClick={() => setSupportIsVisible(true)}
                        className={styles.show_more_less}
                    >
                        show more
                    </a>
                }
            </div>
        </div>
    );
}
