import styles from "./contactUsPhotoComp.module.css"


export default function ContactUsPhoto() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <div className={styles.about_us_head_container}>
                        <h1>
                            Contact Us
                        </h1>
                        <p>Get Intouch</p>
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