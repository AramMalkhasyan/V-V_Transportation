'use client'

import styles from "./aboutUsContent.module.css";
import {useTranslations} from "next-intl";

export default function AboutUsContent() {
    const t = useTranslations("Aboutuspage");
    return (
        <div className={styles.container}>
            <div className={styles.layer}>
                <h1>
                    {t("aboutUsSlogan")}
                </h1>
                <p>
                    {t("aboutUsContent")}
                </p>
            </div>
        </div>
    );
}