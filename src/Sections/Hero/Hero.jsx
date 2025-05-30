import styles from './HeroStyles.module.css';
import heroImg from '../../assets/middhun profile pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Middhun Resume - React Projects.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
   const { theme, toggleTheme } = useTheme();

   const themeIcon = theme === 'light' ? sun : moon;
   const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
   const githubIcon = theme === 'light' ? githubLight : githubDark;
   const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero"className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero} 
            src={heroImg} alt="Profile picture of Middhun Raghunathan" />
            <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon" 
            onClick= { toggleTheme }/>
        </div>
        <div className={styles.info}>
            <h1>Middhun 
                <br />
                Raghunathan
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" /></a>
                    <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="GitHub icon" /></a>
                    <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn icon" /></a>
                </span>
                <p className= {styles.description}>
                System Engineer at TCS with strong problem-solving skills and a quick learning ability. Passionate about cloud platforms and web application development, currently focused on mastering JavaScript and React to advance in my career.
                </p>
                <a href={CV} download>
                    <button className="hover" >
                        Resume
                    </button>
                </a>
        </div>
    </section>
  );
}

export default Hero;