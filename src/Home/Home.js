import { useRef, useEffect } from 'react';
import styles from './Home.module.scss';
import Header from '../Header/Header';
import flower from '../Assets/flower.svg';
import another from '../Assets/another.svg';

import Footer from '../Footer/Footer';
import gsap from 'gsap';
import Skills from '../components/Skills/Skills';
import Navigation from '../components/Navigation/Navigation';
import clsx from 'clsx';
import SkillReel from '../components/SkillReel/SkillReel';
import ProjectsLink from '../components/ProjectsLink/ProjectsLink';
import Tags from '../components/TagCloud/TagCloud';

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
    <div className={styles.home}>
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
          <Tags />
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
        <h2 className={styles.aboutHeader}>Hello, world!</h2>
        <div className={styles.aboutTextContainer}>
          <p className={styles.aboutText}>
            <span className={styles.aboutIntro}>Кто я такой</span>
            Меня зовут Антон, я фронтенд-разработчик из города Владимир. Обожаю
            создавать и видеть свои работы на просторах интернета 🌍 Интересуюсь
            разработкой на JavaScript и TypeScript, особенно на фреймворках
            React и Next.js. Буду рад общению и обратной связи.
          </p>
        </div>
        <div className={styles.aboutSvg}>
          <img src={another} alt="" />
        </div>
      </div>

      <div className="my-skills-main-reel">
        <SkillReel />
        <Skills />
        <ProjectsLink />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
