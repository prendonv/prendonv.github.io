import { Info } from '@phosphor-icons/react';
import { useContentStore } from '../../store/contentStore';
import styles from './Disclaimer.module.css';

const Disclaimer = () => {
    const storeContent = useContentStore((state) => state.content);

    if (!storeContent) return null;
    const { disclaimer, uiLabels } = storeContent;

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={`glass-panel ${styles.panel}`}>
                    <div className={styles.iconWrapper}>
                        <Info size={32} />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>{uiLabels.disclaimerHeading}</h2>
                        {disclaimer.paragraphs.map((text, index) => (
                            <p key={index} className={styles.text}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disclaimer;
