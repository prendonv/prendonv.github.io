import { useContentStore } from '../../store/contentStore';
import styles from './Services.module.css';

const Services = () => {
    const storeContent = useContentStore((state) => state.content);

    if (!storeContent) return null;
    const { hero, uiLabels } = storeContent;

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.sectionHeading}>{uiLabels.servicesHeading}</h2>
                <div className={styles.grid}>
                    {hero.services.map((service, index) => (
                        <article key={index} className={`${styles.card} glass-panel`}>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
