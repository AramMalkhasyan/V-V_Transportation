import styles from "./aboutUsPhoto.module.css"
import { useTranslations } from "next-intl";


export default function AboutUsPhoto() {
    const t = useTranslations("Aboutuspage")
    return (
        <>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <div className={styles.about_us_head_container}>
                        <h1>
                            {t("aboutUs")}
                        </h1>
                        {/* <p>
                            {t("aboutUsSlogan")}
                        </p> */}
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