'use client'


import styles from "./services.module.css";
import TransportServicesPhoto from "../../images/TransportServicesPhoto.jpg";
import warehouseOfCarsPhoto from "../../images/WhatsApp Image 2024-10-20 at 12.32.11.jpeg.jpg";
import customSupportPhoto from "../../images/WhatsApp Image 2024-12-06 at 13.57.49.jpeg.jpg"
import Image from "next/image";
import {useEffect, useRef, useState} from "react";


export default function ServicesServ() {
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
                    <h1>Transportation of cars</h1>
                    <p>
                    Currently, the company V&V TRANS is one of the leaders of the South Caucasus market for
                    the transportation of cars and has a reputation as a reliable and conscientious partner.
                    The company's fleet of car carriers consists of equipment from leading manufacturers
                    such as VOLVO TRUCKS and MERCEDES-BENZ TRUCKS. Geography of transportation: Russia,
                    Armenia, Belarus, Georgia, Kazakhstan, Uzbekistan.
                    </p>
                </div>
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
                    <h1>Warehouse for cars</h1>
                    <p>
                        V&V TRANS has two sites that take into account all the
                        features of warehouse processing and storage of cars.
                    </p>
                </div>
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
                    <h1>Customs support</h1>
                    <p>
                        We offer a full range of services for customs clearance and insurance of vehicles.
                        Our specialists will consult on all issues related to customs clearance procedures
                        for vehicles, and will also help you choose the best option for cargo insurance
                        during transportation.
                    </p>
                </div>
            </div>
        </div>
    );
}