import { Envelope, LinkedinLogo, Phone } from '@phosphor-icons/react';
import { useContentStore } from '../../store/contentStore';
import styles from './Footer.module.css';

const Footer = () => {
    const storeContent = useContentStore((state) => state.content);

    if (!storeContent) return null;
    const { footer, uiLabels } = storeContent;

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{footer.title}</h2>

                <div className={styles.contactMethods}>
                    <a href={`tel:${footer.contact.phone}`} className={styles.method}>
                        <Phone size={24} className={styles.icon} />
                        <span>{footer.contact.phone}</span>
                    </a>

                    <a href={`mailto:${footer.contact.email}`} className={styles.method}>
                        <Envelope size={24} className={styles.icon} />
                        <span>{footer.contact.email}</span>
                    </a>

                    <a href={footer.contact.linkedin} target="_blank" rel="noopener noreferrer" className={styles.method}>
                        <LinkedinLogo size={24} className={styles.icon} />
                        <span>LinkedIn</span>
                    </a>
                </div>

                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Pablo Rendón. {uiLabels.copyrightText}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
