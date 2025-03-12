'use client'
import styles from './footer.module.css'
import vChatLogo from "../../icons/vchat.png";
import ViberLogo from "../../icons/viber.png";
import InstagramLogo from "../../icons/instagram.png";
import facebookLogo from "../../icons/facebook.png";
import Image from "next/image";



export default function Footer() {

    return (
        <div className={styles.footer_container}>
            <div className={styles.company_name}>
               V&V TRANS
                <p>&copy; 2025 "V&V transportation" LLC</p>
            </div>
            <div className={styles.social_logos}>
                <Image
                    src={vChatLogo}
                    alt="no photo"
                />
                <Image
                    src={ViberLogo}
                    alt="no photo"
                />
                <Image
                    src={InstagramLogo}
                    alt="no photo"
                />
                <Image
                    src={facebookLogo}
                    alt="no photo"
                />
            </div>
        </div>
    );
}
