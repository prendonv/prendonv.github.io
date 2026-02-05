import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useContentStore } from '../store/contentStore';
import styles from './ProjectCard.module.css';
import { trackEvent } from '../utils/analytics';

const ProjectCard = ({ project, variant = 'featured' }) => {
    const { id, title, tags, summary, image } = project;
    const storeContent = useContentStore((state) => state.content);

    if (!storeContent) return null;
    const { uiLabels } = storeContent;

    const handleProjectClick = () => {
        trackEvent('Navigation', 'View Project', title);
    };

    return (
        <Link
            to={`/project/${id}`}
            className={`${styles.card} ${styles[variant]} glass-panel`}
            onClick={handleProjectClick}
        >
            <div className={styles.content}>
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                </div>

                <h3 className={styles.title}>{title}</h3>
                <p className={styles.summary}>{summary}</p>

                <div className={styles.footer}>
                    <span className={styles.linkText}>{uiLabels.viewMore}</span>
                    <ArrowRight className={styles.arrow} />
                </div>
            </div>

            {/* Image Area */}
            <div className={styles.imagePlaceholder}>
                {image ? (
                    <img src={image} alt={title} className={styles.image} />
                ) : (
                    <div className={styles.imageOverlay} />
                )}
            </div>
        </Link>
    );
};

export default ProjectCard;
