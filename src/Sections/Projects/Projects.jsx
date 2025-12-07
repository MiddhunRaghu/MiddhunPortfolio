import styles from './ProjectsStyles.module.css';
import SpotifyIcon from '../../assets/Download Spotify logo on transparent background.jpg';
import ProjectCard from '../../common/ProjectCard';
import ThirstyLion from '../../assets/roundlogo.png';
import WeatherIcon from '../../assets/weather-app.png';
import fitlift from '../../assets/fitlift.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={SpotifyIcon} link="https://middhunraghu.github.io/Spotify-Clone/" h3="Spotify" p="Audio Streaming WebApp"/>
            <ProjectCard src={ThirstyLion} link="https://MiddhunRaghu.github.io/Thirsty-Lion-Coffee-Shop/" h3="Thirsty Lion" p="Thirsty Lion - Coffee Shop"/>
            <ProjectCard src={WeatherIcon} link="https://middhunraghu.github.io/Weather-Finder/" h3="Weather Finder" p="Weather Finder Application"/>
        </div>
    </section>
  );
}

export default Projects;