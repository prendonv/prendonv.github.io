import { useContentStore } from '../../store/contentStore';
import styles from './Hero.module.css';

const Hero = () => {
    const storeContent = useContentStore((state) => state.content);

    if (!storeContent) return null;
    const { hero } = storeContent;

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.contentGrid}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            {hero.title}
                        </h1>
                        <div className={styles.description}>
                            {hero.description.map((paragraph, index) => (
                                <p key={index} className={styles.paragraph}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageInner}>
                            <img
                                src="/images/pablo-photo.jpg"
                                alt="Pablo Rendón"
                                className={styles.photo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
