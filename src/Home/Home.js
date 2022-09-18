import { useRef, useEffect } from 'react';
import styles from './Home.module.scss';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import gsap from 'gsap';
import Skills from '../components/Skills/Skills';
import Navigation from '../components/Navigation/Navigation';
import clsx from 'clsx';
import SkillReel from '../components/SkillReel/SkillReel';
import ProjectsLink from '../components/ProjectsLink/ProjectsLink';
import Tags from '../components/TagCloud/TagCloud';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import { useGetAllProjects } from '../hooks/useAllProjects';

const data = [
  {
    id: '1',
    name: 'test',
    backgroundImg:
      'https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '2',
    name: 'test2',
    backgroundImg:
      'https://images.unsplash.com/photo-1661473677057-9b69b8ccc53a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80',
  },
  {
    id: '3',
    name: 'tes3',
    backgroundImg:
      'https://images.unsplash.com/photo-1661602715735-d401dafd3615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
  },
  {
    id: '4',
    name: 'test4',
    backgroundImg:
      'https://images.unsplash.com/photo-1661415746824-8eb9fe0275dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80',
  },
];

function Home() {
  const { areProjectsLoading, allProjectsData } = useGetAllProjects();
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = useRef();

  useEffect(() => {
    timeline_home.current = gsap
      .timeline()
      .from(
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
      )
      .from(p1, {
        duration: 0.6,
        x: -100,
        delay: 0.2,
        opacity: 0,
      });
  }, []);

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.heroWrapper}>
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

        <div ref={(el) => (p1 = el)} className={styles.container}>
          <Tags />
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
      </div>

      <SkillReel />
      <Skills />
      <ProjectsLink />

      {allProjectsData?.data?.projects.length > 0 > 0 && (
        <div className={styles.projectsPreview}>
          {allProjectsData?.data?.projects.map((item) => {
            return <ProjectItem {...item} key={item._id} page="home" />;
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;
