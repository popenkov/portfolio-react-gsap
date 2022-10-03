import { useRef, useEffect } from 'react';
import styles from './Home.module.scss';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';
import gsap from 'gsap';
import Skills from '../../components/Skills/Skills';
import clsx from 'clsx';
import SkillReel from '../../components/SkillReel/SkillReel';
import ProjectsLink from '../../components/ProjectsLink/ProjectsLink';
import Tags from '../../components/TagCloud/TagCloud';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { useGetAllProjects } from '../../hooks/useAllProjects';

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
            <span className={styles.aboutIntro}>WHO AM I?</span>
            My name is Anton, I'm a front-end developer. I love to create and
            and show my works to the whole world in the Internet🌍 I'm
            interested in JavaScript and TypeScript development, especially
            React and Next.js frameworks. I will be glad to communicate and
            receive your feedback.
          </p>
        </div>
      </div>

      <SkillReel />
      <Skills />
      <ProjectsLink />

      {allProjectsData?.data?.projects?.length > 0 > 0 && (
        <>
          <p className={styles.recentProjects}>My recent projects</p>
          <div className={styles.projectsPreview}>
            {allProjectsData?.data?.projects.map((item) => {
              return <ProjectItem {...item} key={item._id} page="home" />;
            })}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Home;
