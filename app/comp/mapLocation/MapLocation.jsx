"use client"


import {useEffect, useRef, useState} from "react";
import {Loader} from "@googlemaps/js-api-loader";
import styles from "./mapLocation.module.css";

export default function MapLocation() {
    const mapRef = useRef(null);
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

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: "weekly"
            })
            const {Map} = await loader.importLibrary('maps');
            const {Marker} = await loader.importLibrary("marker")

            const position = {
                lat: 43.642693,
                lng: -79.3871189
            };
            const darkModeStyle = [
                { elementType: "geometry", stylers: [{ color: "#212121" }] },
                { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
                {
                    featureType: "administrative",
                    elementType: "geometry",
                    stylers: [{ color: "#757575" }],
                },
                {
                    featureType: "administrative.country",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#9e9e9e" }],
                },
                {
                    featureType: "administrative.land_parcel",
                    stylers: [{ visibility: "off" }],
                },
                {
                    featureType: "administrative.locality",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#bdbdbd" }],
                },
                {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{ color: "#181818" }],
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{ color: "#1e1e1e" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#2c2c2c" }],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#1f1f1f" }],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#8a8a8a" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#000000" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#3d3d3d" }],
                },
            ];
            const mapOptions = {
                center: position,
                zoom: 16,
                styles: darkModeStyle
            }
            const map = new Map(mapRef.current, mapOptions);
            const marker = new Marker({
                map:map,
                position:position
            })

        }

        initMap()
    }, [])

    return (
        <div className={styles.map_location_container}>
            <h1
                className={isVisible ? styles.our_office_header : styles.our_office_header_not_visible}
                ref={blockRef}
            >
                OUR OFFICE
            </h1>
            <div className={styles.map_container}>
                <div ref={mapRef} className={styles.map}/>
                <div className={styles.office_info}>
                    <p><span>Address:</span> Pushkin st. 5 lane ap 25</p>
                    <p><span>Email:</span> testemail@gmail.com</p>
                    <p><span>Phone:</span> +37455999999</p>
                </div>
            </div>
        </div>
    );
}