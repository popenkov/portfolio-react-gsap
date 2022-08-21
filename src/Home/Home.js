import { useRef, useEffect } from 'react';
import styles from './Home.module.scss';
import Header from '../Header/Header';
import flower from '../Assets/flower.svg';
import another from '../Assets/another.svg';
import arrow from '../Assets/arrow.svg';
import { Link } from 'react-router-dom';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';
import gsap from 'gsap';
import Skills from '../components/Skills/Skills';
import Navigation from '../components/Navigation/Navigation';
import clsx from 'clsx';
import SkillReel from '../components/SkillReel/SkillReel';

function Home() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(() => {
    timeline_home.from(
      [text1, text2, text3, text4],
      {
        duration: 1,
        skewY: 15,
        y: 400,
        stagger: {
          amount: 0.2,
        },
      },
      '-=1.2'
    );
    timeline_home.from(p1, {
      duration: 0.6,
      x: -100,
      delay: 0.2,
      opacity: 0,
    });
  });
  return (
    <div className="home">
      <Header />
      <div className={styles.container}>
        <div className={styles.nameWrapper}>
          <div className={styles.nameParagraph}>
            <p ref={(el) => (text1 = el)}>Anton</p>
          </div>
          <div
            className={clsx(styles.nameParagraph, styles.nameParagraphBottom)}
          >
            <p ref={(el) => (text2 = el)}>Popenkov</p>
          </div>
        </div>
      </div>

      <div className={styles.leftQuote}>
        <p ref={(el) => (p1 = el)}>
          I create digital experiences that merge art <br /> direction,
          branding, creative strategy, web <br /> design, prototyping, and
          digital interactions.
        </p>
      </div>
      <div className={styles.container}>
        <div></div>
        <div className={styles.nameWrapper}>
          <div className={styles.nameParagraph}>
            <p ref={(el) => (text3 = el)}>Frontend</p>
          </div>
          <div
            className={clsx(styles.nameParagraph, styles.nameParagraphBottom)}
          >
            <p ref={(el) => (text4 = el)}>Developer</p>
          </div>
        </div>
      </div>
      <div className={styles.flower}>
        <img src={flower} alt="" />
      </div>
      <div className={styles.about}>
        <div className={styles.aboutHeader}>
          <h1 className="main-short-about">Hello, world!</h1>
        </div>
        <div className={styles.aboutTextContainer}>
          <p className={styles.aboutText}>
            <span className={styles.aboutIntro}>who am i</span> My name is
            Anton, from Vladimir, Russian Federation. I enjoy creating things
            that live on the web🌍. I'm focused on building products with
            JavaScript, TypeScript, specifically React and Next.js.
          </p>
          <p className={styles.aboutText}>
            I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
          </p>
        </div>
        <div className="another-svg">
          <img src={another} alt="" />
        </div>
      </div>
      <div className="my-skills-main-reel">
        <SkillReel />
        <Skills />

        <div className="project-and-work">
          <h1>
            <Link className="h1-project" to="/projects">
              My Projects and Works <img src={arrow} alt="" />
            </Link>
          </h1>
          <br />
          <p>Click me!</p>
        </div>
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
