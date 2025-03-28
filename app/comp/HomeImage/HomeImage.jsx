import Image from "next/image";
import homePhoto from "../../images/homePhoto.jpg";
import styles from "./homeImage.module.css"

export default function HomeImage() {
    return (
        <div>
            <video autoPlay muted loop className={styles.video}>
                <source src="/HomeVideo.mp4" type="video/mp4"/>
            </video>
            <div className={styles.slogan_container}>
                <h1>We Provide One Stop Logistic & Warehousing Services .</h1>
                <p>Guaranteed by more than a hundred awards</p>
            </div>
        </div>
    );
}