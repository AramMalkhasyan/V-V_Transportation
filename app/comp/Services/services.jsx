'use client'


import styles from "./services.module.css";
import TransportServicesPhoto from "../../images/Services.jpg";
import warehouseOfCarsPhoto from "../../images/Services11.jpg";
import customSupportPhoto from "../../images/Services22.jpg"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import { useTranslations } from 'next-intl';


export default function ServicesServ() {
    const blockRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [transportIsVisible, setTransportIsVisible] = useState(false);
    const [waerhouseIsVisible, setWaerhouseIsVisible] = useState(false);
    const [customIsVisible, setCustomIsVisible] = useState(false);
    const t = useTranslations("Servicespage");
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
            <div
                ref={blockRef}
                className={isVisible ? styles.transportation_of_cars : styles.transportation_of_cars_not_visible}
            >
                <div className={styles.transport_photo_container}>
                    <Image
                        src={TransportServicesPhoto}
                        alt="no photo"
                        className={styles.transport_photo}
                    />
                </div>
                <div className={styles.transportation_of_car_information_container}>
                    <h1>
                        {t("carTrasportation")}
                    </h1>
                    <p className={transportIsVisible ? styles.transport_content : styles.transport_content_hide}>
                        {t("carTrasportationContent")}
                    </p>
                </div>
                {transportIsVisible ? 
                    <a 
                        onClick={() => setTransportIsVisible(false)}
                        className={styles.show_more_less}
                    >
                        show less
                    </a>
                    :
                    <a 
                        onClick={() => setTransportIsVisible(true)}
                        className={styles.show_more_less}
                    >
                        show more
                    </a>
                }
            </div>
            <div
                ref={blockRef}
                className={isVisible ? styles.transportation_of_cars : styles.transportation_of_cars_not_visible}
            >
                <div className={styles.transport_photo_container}>
                    <Image
                        src={warehouseOfCarsPhoto}
                        alt="no photo"
                        className={styles.transport_photo}
                    />
                </div>
                <div className={styles.transportation_of_car_information_container}>
                    <h1>
                        {t("carWarehouse")}
                    </h1>
                    <p className={waerhouseIsVisible ? styles.transport_content : styles.transport_content_hide}>
                        {t("carWarehouseContent")}
                    </p>
                </div>
                {waerhouseIsVisible ? 
                    <a 
                        onClick={() => setWaerhouseIsVisible(false)}
                        className={styles.show_more_less}
                    >
                        show less
                    </a>
                    :
                    <a 
                        onClick={() => setWaerhouseIsVisible(true)}
                        className={styles.show_more_less}
                    >
                        show more
                    </a>
                }
            </div>
            <div
                ref={blockRef}
                className={isVisible ? styles.transportation_of_cars : styles.transportation_of_cars_not_visible}
            >
                <div className={styles.transport_photo_container}>
                    <Image
                        src={customSupportPhoto}
                        alt="no photo"
                        className={styles.transport_photo}
                    />
                </div>
                <div className={styles.transportation_of_car_information_container}>
                    <h1>
                        {t("customs")}
                    </h1>
                    <p className={customIsVisible ? styles.transport_content : styles.transport_content_hide}>
                        {t("customsContent")}
                    </p>
                </div>
                {customIsVisible ? 
                    <a 
                        onClick={() => setCustomIsVisible(false)}
                        className={styles.show_more_less}
                    >
                        show less
                    </a>
                    :
                    <a 
                        onClick={() => setCustomIsVisible(true)}
                        className={styles.show_more_less}
                    >
                        show more
                    </a>
                }
            </div>
        </div>
    );
}