'use client'
import styles from './footer.module.css'
import vChatLogo from "../../icons/vchat.png";
import ViberLogo from "../../icons/viber.png";
import InstagramLogo from "../../icons/instagram.png";
import facebookLogo from "../../icons/facebook.png";
import Image from "next/image";
import Link from 'next/link';



export default function Footer() {

    return (
        <div className={styles.footer_container}>
            <div className={styles.company_name}>
               V&V TRANS
                <p>&copy; 2025 "V&V trans" LLC</p>
            </div>
            <div className={styles.social_logos}>
                <Link 
                    href="https://www.wechat.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Image
                        src={vChatLogo}
                        alt="no photo"
                    />
                </Link>
                 <Link 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Image
                        src={ViberLogo}
                        alt="no photo"
                    />
              </Link>
                <Link 
                    href="https://www.instagram.com/vvtrans_armenia?igsh=aWxmeGVudG8xcHRk&utm_source=qr"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <Image
                        src={InstagramLogo}
                        alt="no photo"
                    />
                </Link>
                <Link 
                    href="https://www.facebook.com/share/19aHkFKLbu/?mibextid=wwXIfr"
                    target="_blank"  
                    rel="noopener noreferrer"
                >
                    <Image
                        src={facebookLogo}
                        alt="no photo"
                    />
                </Link>
            </div>
        </div>
    );
}
