import React, { useEffect, useRef } from 'react';
import Header from '../../Header/Header';
import styles from './Blog.module.scss';
import arrow from '../../Assets/arrow.svg';
import Footer from '../../Footer/Footer';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview';

import { useGetAllPosts } from '../../hooks/useAllPosts';
function Blog() {
  const { arePostsLoading, allBlogData } = useGetAllPosts();
  const timeline_project = useRef(null);
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

  // <>
  //   <ProjectPreview />
  //   <ProjectPreview />
  // </>;

  console.log(allBlogData);

  return (
    <div>
      <Header />
      <div className={styles.blog}>
        <div className={styles.blogContainer}>
          <h1 ref={(el) => (text1 = el)}>
            My <br />
            blog
          </h1>
        </div>
        <div className={styles.postsContainer}>
          <div
            className={styles.postsContainer}
            ref={(el) => (itemsProject = el)}
          >
            {allBlogData?.length > 0 &&
              allBlogData.map((item) => {
                return (
                  <>
                    <ProjectPreview {...item} key={item._id} />
                    <ProjectPreview {...item} key={item._id} />
                    <ProjectPreview {...item} key={item._id} />
                    <ProjectPreview {...item} key={item._id} />
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
