import React, { useEffect, useRef } from 'react';
import Header from '../../Header/Header';
import styles from './Blog.module.scss';
import arrow from '../../Assets/arrow.svg';
import Footer from '../../Footer/Footer';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';
import { useGetAllProjects } from '../../hooks/useAllProjects';
function Blog() {
  const { arePostsLoading, allBlogData } = useGetAllProjects();
  const timeline_project = useRef();
  let text1 = useRef(null);
  let itemsProject = useRef(null);

  useEffect(() => {
    timeline_project.current = gsap
      .timeline()
      .from(
        text1,
        {
          duration: 1,
          skewY: 10,
          y: 500,
          delay: 2,
          stagger: {
            amount: 0.4,
          },
          opacity: 0,
        },
        '-=1.5'
      )
      .from(itemsProject, {
        duration: 0.5,
        opacity: 0,
        y: 100,
      });
  }, []);

  // <ProjectPreview />
  //         <ProjectPreview />

  // return (
  //   <div>
  //     <Header />
  //     <div className={styles}>
  //       <div className="my-projects">
  //         <h1 ref={(el) => (text1 = el)}>
  //           My <br />
  //           blog
  //         </h1>
  //       </div>
  //       <div className="project-page-container">
  //         <div
  //           className={styles.postsContainer}
  //           ref={(el) => (itemsProject = el)}
  //         >
  //           <ProjectPreview />
  //           <ProjectPreview />
  //         </div>
  //       </div>
  //     </div>
  //     <Footer />
  //   </div>
  // );

  return (
    <div className={styles.projects}>
      <Header />
      <div className={styles.container}>
        <h1 ref={(el) => (text1 = el)} className={styles.title}>
          My <br />
          blog
        </h1>
        <div
          className={styles.projectsContainer}
          ref={(el) => (itemsProject = el)}
        >
          {allBlogData?.data?.projects.length > 0 &&
            allBlogData?.data?.projects.map((item) => {
              return <ProjectPreview {...item} key={item._id} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
