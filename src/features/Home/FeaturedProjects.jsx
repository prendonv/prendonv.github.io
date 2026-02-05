import { useContentStore } from '../../store/contentStore';
import ProjectCard from '../../ui/ProjectCard';
import styles from './FeaturedProjects.module.css';

const FeaturedProjects = () => {
    const content = useContentStore((state) => state.content);

    if (!content) return null;

    const { projects, uiLabels } = content;

    return (
        <section className={styles.section}>
            <div className="container">

                {/* Block 1: Impact Cases */}
                <div className={styles.block}>
                    <h2 className={styles.heading}>{uiLabels.featuredHeading}</h2>
                    <div className={styles.featuredGrid}>
                        {projects.featured.map((project) => (
                            <ProjectCard key={project.id} project={project} variant="featured" />
                        ))}
                    </div>
                </div>

                {/* Block 2: Strategic Solutions */}
                <div className={styles.block}>
                    <h2 className={styles.heading}>{uiLabels.strategicHeading}</h2>
                    <div className={styles.compactGrid}>
                        {projects.strategic.map((project) => (
                            <ProjectCard key={project.id} project={project} variant="compact" />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedProjects;
