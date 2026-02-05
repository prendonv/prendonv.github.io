import { useParams, Navigate, Link } from 'react-router-dom';
import { CaretLeft } from '@phosphor-icons/react';
import { useContentStore } from '../../store/contentStore';
import styles from './ProjectDetail.module.css';

const ProjectSection = ({ title, content, highlightFirstParagraph = false }) => {
    if (!content) return null;

    let mainContent = content;
    let highlight = null;

    if (highlightFirstParagraph) {
        const parts = content.split('\n\n');
        if (parts.length > 1) {
            highlight = parts[0];
            mainContent = parts.slice(1).join('\n\n');
        }
    }

    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.sectionContent}>
                {highlight && <blockquote className={styles.highlight}>{highlight}</blockquote>}
                <p>{mainContent}</p>
            </div>
        </section>
    );
};

const ProjectDetail = () => {
    const { id } = useParams();
    const storeData = useContentStore((state) => state.content);

    if (!storeData) return null;

    const { projects, uiLabels } = storeData;
    const featured = projects?.featured || [];
    const strategic = projects?.strategic || [];

    const project = [...featured, ...strategic].find(p => p.id === id);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const { title, tags, summary, content, image, detailImage, highlightAchievements, layout = "bottom" } = project;
    const sections = content || {};
    const displayImage = detailImage || image;

    return (
        <div className={styles.page}>

            <header className={styles.header}>
                <div className="container">
                    <div className={styles.navigation}>
                        <Link to="/" className={styles.backLink}>
                            <CaretLeft size={20} weight="bold" />
                            {uiLabels.backToHome}
                        </Link>
                    </div>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </header>

            <div className={`container ${styles.contentContainer}`}>
                {sections.intro && (
                    <blockquote className={styles.intro}>
                        {sections.intro}
                    </blockquote>
                )}
                <ProjectSection title={uiLabels.context} content={sections.context} />
                <ProjectSection title={uiLabels.challenge} content={sections.challenge} />
            </div>

            {/* Layout Logic */}
            {layout === 'sidebar' ? (
                // SIDEBAR LAYOUT (Research IA)
                <div className={`container ${styles.middleGrid}`}>
                    <div className={styles.middleContent}>
                        <ProjectSection title={sections.challenges_title || uiLabels.challenge} content={sections.challenges_extra} />
                        <ProjectSection title={sections.how_title || uiLabels.how} content={sections.how_i_did_it} />
                    </div>
                    <div className={styles.middleImageWrapper}>
                        {displayImage ? (
                            <img src={displayImage} alt={title} className={styles.middleImage} />
                        ) : (
                            <div className={styles.placeholderLabel}>Imagen Principal</div>
                        )}
                    </div>
                </div>
            ) : layout === 'zigzag' ? (
                // ZIGZAG LAYOUT (Stakeholders)
                <>
                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={sections.challenges_title || uiLabels.challenge} content={sections.challenges_extra} />
                    </div>

                    <div className={`container ${styles.middleGrid} ${styles.middleGridEqual}`}>
                        <div className={styles.middleContent}>
                            <ProjectSection title={sections.how_title || uiLabels.how} content={sections.how_i_did_it} />
                        </div>
                        <div className={styles.middleImageWrapper}>
                            <img src={project.images?.how || displayImage} alt="Cómo lo hice" className={styles.middleImage} />
                        </div>
                    </div>

                    {sections.impact && (
                        <div className={`container ${styles.contentContainer}`}>
                            <ProjectSection title={uiLabels.impact} content={sections.impact} />
                        </div>
                    )}

                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={uiLabels.achievements} content={sections.achievements} highlightFirstParagraph={highlightAchievements} />
                    </div>

                    <div className="container">
                        <div className={`${styles.visualBreak} ${styles.visualBreakSmall}`}>
                            <img src={project.images?.achievements || displayImage} alt="Logros" className={styles.visualImage} />
                        </div>
                    </div>
                </>
            ) : layout === 'rebranding-custom' ? (
                // REBRANDING CUSTOM LAYOUT
                <>
                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={sections.challenges_title || uiLabels.challenge} content={sections.challenges_extra} />
                    </div>

                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={sections.how_title || uiLabels.how} content={sections.how_i_did_it} />
                        {sections.execution && <ProjectSection title={sections.how_title || uiLabels.how} content={sections.execution} />}
                    </div>

                    <div className={`container ${styles.middleGrid} ${styles.middleGridEqual}`}>
                        <div className={styles.middleContent}>
                            {sections.impact && <ProjectSection title={uiLabels.impact} content={sections.impact} />}
                        </div>
                        <div className={styles.middleImageWrapper}>
                            <img src={project.images?.flow || displayImage} alt="Flujo de usuario" className={styles.middleImage} />
                        </div>
                    </div>

                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={uiLabels.achievements} content={sections.achievements} highlightFirstParagraph={highlightAchievements} />
                    </div>
                </>
            ) : layout === 'low-code-custom' ? (
                // LOW CODE CUSTOM LAYOUT
                <>
                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={sections.challenges_title || uiLabels.challenge} content={sections.challenges_extra} />
                    </div>

                    <div className={`container ${styles.middleGrid} ${styles.middleGridEqual}`}>
                        <div className={styles.middleContent}>
                            <ProjectSection title={sections.how_title || uiLabels.how} content={sections.how_i_did_it} />
                        </div>
                        <div className={styles.middleImageWrapper}>
                            <img src={project.images?.how || displayImage} alt="Cómo lo hice" className={styles.middleImage} />
                        </div>
                    </div>

                    <div className={`container ${styles.contentContainer}`}>
                        {sections.impact && <ProjectSection title={uiLabels.impact} content={sections.impact} />}
                        <ProjectSection title={uiLabels.achievements} content={sections.achievements} highlightFirstParagraph={highlightAchievements} />

                        {project.images?.results && (
                            <div style={{ marginTop: '3rem', marginBottom: '1rem', display: 'flex', justifyContent: 'flex-start' }}>
                                <img
                                    src={project.images.results}
                                    alt="Resultados"
                                    style={{ maxWidth: '60%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--glass-shadow)' }}
                                />
                            </div>
                        )}
                    </div>
                </>
            ) : layout === 'storytelling-custom' ? (
                // STORYTELLING CUSTOM LAYOUT
                <>
                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={sections.challenges_title || uiLabels.challenge} content={sections.challenges_extra} />
                        <ProjectSection title={sections.how_title || uiLabels.how} content={sections.how_i_did_it} />
                        {sections.impact && <ProjectSection title={uiLabels.impact} content={sections.impact} />}

                        {project.images?.main && (
                            <div style={{ marginTop: '3rem', marginBottom: '3rem', display: 'flex', justifyContent: 'flex-start' }}>
                                <img
                                    src={project.images.main}
                                    alt="Estrategia de comunicación"
                                    style={{ maxWidth: '60%', borderRadius: 'var(--radius-md)', boxShadow: 'var(--glass-shadow)' }}
                                />
                            </div>
                        )}

                        <ProjectSection title={uiLabels.achievements} content={sections.achievements} highlightFirstParagraph={highlightAchievements} />
                    </div>
                </>
            ) : (
                // BOTTOM LAYOUT (Sinergia IT & Others)
                <>
                    <div className={`container ${styles.contentContainer}`}>
                        <ProjectSection title={sections.challenges_title || uiLabels.challenge} content={sections.challenges_extra} />
                        <ProjectSection title={sections.how_title || uiLabels.how} content={sections.how_i_did_it} />
                        {sections.impact && <ProjectSection title={uiLabels.impact} content={sections.impact} />}
                        <ProjectSection title={uiLabels.achievements} content={sections.achievements} highlightFirstParagraph={highlightAchievements} />
                    </div>

                    <div className="container">
                        <div className={styles.visualBreak}>
                            {displayImage ? (
                                <img src={displayImage} alt={title} className={styles.visualImage} />
                            ) : (
                                <div className={styles.placeholderLabel}>Imagen Principal</div>
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* Shared Bottom Content */}
            <div className={`container ${styles.contentContainer}`}>
                {layout === 'sidebar' && (
                    <ProjectSection title={uiLabels.achievements} content={sections.achievements} highlightFirstParagraph={highlightAchievements} />
                )}
                <ProjectSection title={uiLabels.team} content={sections.team} />
            </div>
        </div>
    );
};

export default ProjectDetail;
