'use client'
import styles from "./homeImage.module.css";
import { useTranslations } from 'next-intl';

export default function HomeImage() {
    const t = useTranslations("Homepage")
    return (
        <div>
            <video className={styles.video} autoPlay muted loop>
                <source src="./HomeVideo.mp4" type="video/mp4"/>
            </video>
            <h1 className={styles.slogan_container}>
                {t("slogan")}
            </h1>
        </div>
    );
}

//Guaranteed by more than a hundred awards