import styles from "./serviceImage.module.css"
import { useTranslations } from 'next-intl';


export default function ServicesImage() {
    const t = useTranslations("Servicespage");
    return (
        <>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <div className={styles.our_services_head_container}>
                        <h1>
                            {t("ourServices")}
                        </h1>
                        <p>
                            {t("servicesSlogan")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}