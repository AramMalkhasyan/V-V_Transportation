import styles from "./galleryPhoto.module.css";
import { useTranslations } from "next-intl";


export default function GalleryPhoto() {
    const t = useTranslations("Gallery");
    return (
        <>
            <div className={styles.container}>
                <div className={styles.layer}>
                    <div className={styles.about_us_head_container}>
                        <h1>
                            {t("gallery")}
                        </h1>
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