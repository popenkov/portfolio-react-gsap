import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SmootherContext } from '../../context/SmootherContext';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import styles from './Projects.module.scss';
import Header from '../../components/Header/Header';
import { useGetAllProjects } from '../../hooks/useAllProjects';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import Footer from '../../Footer/Footer';

const data = [
  {
    id: '0',
    name: 'Web portfolio',
    backgroundImg:
      'https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '1',
    name: 'Gallery',
    backgroundImg:
      'https://images.unsplash.com/photo-1661473677057-9b69b8ccc53a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80',
  },
  {
    id: '2',
    name: 'test3',
    backgroundImg:
      'https://images.unsplash.com/photo-1661602715735-d401dafd3615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
  },
  {
    id: '3',
    name: 'test4',
    backgroundImg:
      'https://images.unsplash.com/photo-1661415746824-8eb9fe0275dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80',
  },
];

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
