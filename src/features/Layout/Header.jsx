import { Link } from 'react-router-dom';
import { DownloadSimple } from '@phosphor-icons/react';
import { useContentStore } from '../../store/contentStore';
import Button from '../../ui/Button';
import styles from './Header.module.css';
import { trackEvent } from '../../utils/analytics';

const Header = () => {
    const language = useContentStore((state) => state.language);
    const setLanguage = useContentStore((state) => state.setLanguage);
    const content = useContentStore((state) => state.content);

    if (!content) return null;
    const { uiLabels } = content;

    const handleLangSwitch = (lang) => {
        setLanguage(lang);
        trackEvent('UX', 'Change Language', lang);
    };

    const handleCVClick = () => {
        trackEvent('Engagement', 'Download CV', 'Header Button');
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logoLink}>
                    <div className={styles.logo}>
                        <div className={styles.avatar}>PR</div>
                        <span className={styles.name}>Pablo Rendón</span>
                    </div>
                </Link>

                <nav className={styles.nav}>
                    <div className={styles.langSwitch}>
                        <span
                            className={language === 'es' ? styles.activeLang : styles.inactiveLang}
                            onClick={() => handleLangSwitch('es')}
                        >
                            ES
                        </span>
                        <span className={styles.divider}>|</span>
                        <span
                            className={language === 'en' ? styles.activeLang : styles.inactiveLang}
                            onClick={() => handleLangSwitch('en')}
                        >
                            EN
                        </span>
                    </div>

                    <Button
                        variant="primary"
                        icon={DownloadSimple}
                        href="/CV_Pablo_Rendon.pdf"
                        download="CV_Pablo_Rendon.pdf"
                        onClick={handleCVClick}
                    >
                        {uiLabels.downloadCV}
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
