import styles from './ProjectsStyles.module.css';
import SpotifyIcon from '../../assets/Download Spotify logo on transparent background.jpg';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png';
import WeatherIcon from '../../assets/weather-app.png';
import fitlift from '../../assets/fitlift.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={SpotifyIcon} link="https://middhunraghu.github.io/Spotify-Clone/" h3="Spotify" p="Audio Streaming WebApp"/>
            <ProjectCard src={freshBurger} link="" h3="Fresh Burger" p="Ham Burger Restaurant"/>
            <ProjectCard src={WeatherIcon} link="https://middhunraghu.github.io/Weather-Finder/" h3="Weather Finder" p="Weather Finder Application"/>
            <ProjectCard src={fitlift} link="" h3="FitLift" p="Fitness App"/>
        </div>
    </section>
  );
}

export default Projects;