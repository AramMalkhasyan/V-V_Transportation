import styles from "./aboutUsPhoto.module.css"


export default function AboutUsPhoto() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <div className={styles.about_us_head_container}>
                        <h1>
                            ABOUT US
                        </h1>
                        <p>Our Little Story</p>
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