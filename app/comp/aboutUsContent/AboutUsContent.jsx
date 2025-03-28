import styles from "./aboutUsContent.module.css"

export default function AboutUsContent() {
    return (
        <div className={styles.container}>
            <div className={styles.layer}>
                <h1>Our Story</h1>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in
                    language ocean. A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country, in which roasted parts
                    of sentences fly into your mouth.
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
                    spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend,
                    so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                </p>
            </div>
        </div>
    );
}