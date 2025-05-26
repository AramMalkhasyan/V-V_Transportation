import styles from "./contactUsPhotoComp.module.css";
import { useTranslations } from "next-intl";


export default function ContactUsPhoto() {
    const t = useTranslations("Contactuspage")
    return (
        <>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <div className={styles.about_us_head_container}>
                        <h1>
                            {t("contactUs")}
                        </h1>
                        <p>
                            {t("contactUsSlogan")}    
                        </p>
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