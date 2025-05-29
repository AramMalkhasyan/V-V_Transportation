import styles from "./contactUsContent.module.css";
import phoneIcon from "../../icons/icon-phone.png";
import emailIcon from "../../icons/icon-email.png";
import locationIcon from "../../icons/icon-location.png";
import Image from "next/image";
import { useTranslations } from 'next-intl';


export default function ContactUsContent() {
    const t = useTranslations("Homepage");
    return (
        <>
            <div className={styles.contact_us_content_container}>
                <div className={styles.contact_us_Phone}>
                    <Image src={phoneIcon} alt="" className={styles.icon}/>
                    <p>
                        {t("ContactUsPhoneText")}
                    </p>
                    <a 
                        href='tel: +37411799777'
                        className={styles.link}
                    >
                        (+374) 11 79-97-77
                    </a>
                </div>
                <div className={styles.contact_us_Phone}>
                    <Image src={emailIcon} alt="" className={styles.icon}/>
                    <p>
                        {t("ContactUsEmailText")}
                    </p>
                    <a 
                        href='mailto: info@vvtrans.am'
                        className={styles.link}
                    >
                        info@vvtrans.am
                    </a>
                </div>
                <div className={styles.contact_us_Phone}>
                    <Image src={locationIcon} alt="" className={styles.icon}/>
                    <p>
                        {t("ContactUsLocationText")}
                    </p>
                    <p>
                        {t("addressContent")}
                    </p>
                </div>
            </div>
        </>
    );
}