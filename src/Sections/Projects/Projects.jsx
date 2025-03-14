import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link="" h3="Viberr" p="Streaming App"/>
            <ProjectCard src={freshBurger} link="" h3="Fresh Burger" p="Ham Burger Restaurant"/>
            <ProjectCard src={hipsster} link="" h3="CoolEye" p="Glasses Shop"/>
            <ProjectCard src={fitlift} link="" h3="FitLift" p="Fitness App"/>
        </div>
    </section>
  );
}

export default Projects;