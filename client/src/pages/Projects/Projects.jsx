import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

import ProjectItem from '../../components/ProjectItem/ProjectItem';
import styles from './Projects.module.scss';
import Header from '../../components/Header/Header';
import { useGetAllProjects } from '../../hooks/useAllProjects';
import Footer from '../../components/Footer/Footer';

function Projects() {
  const { areProjectsLoading, allProjectsData } = useGetAllProjects();

  let containerRef = useRef(null);
  let projectRef = useRef(null);

  const tl_projects = useRef();

  useEffect(() => {
    tl_projects.current = gsap.timeline();
    tl_projects.current
      .from(containerRef.current, {
        y: '-150%',
        duration: 5,
        opacity: 0,
      })
      .from(
        projectRef.current,
        {
          scale: 0.7,
          duration: 2,
          stagger: {
            amount: 0.4,
          },
        },
        '-=3'
      );
  }, []);

  return (
    <div className={styles.projects}>
      <Header />
      <div ref={containerRef} className={styles.container}>
        <h1 className={styles.title}>Projects:</h1>
        <div className={styles.projectsContainer}>
          {allProjectsData?.data?.projects?.length > 0 &&
            allProjectsData?.data?.projects.map((item) => {
              return <ProjectItem {...item} key={item._id} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
