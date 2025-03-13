import styles from "./serviceImage.module.css"


export default function ServicesImage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <div className={styles.our_services_head_container}>
                        <h1>
                            OUR SERVICES
                        </h1>
                        <p>V&V handles your parcel delivery with the professionalism</p>
                    </div>
                </div>
            </div>
            <div
                className={styles.our_services}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}