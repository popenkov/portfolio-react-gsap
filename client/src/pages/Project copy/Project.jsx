import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import OtherProjects from '../../components/OtherProjects/OtherProjects';
import Footer from '../../Footer/Footer';
import { useGetAllProjects } from '../../hooks/useAllProjects';
import { useGetProject } from '../../hooks/useProject';
import { splitWords } from '../../utils/textAnimation';

import styles from './Project.module.scss';

const breadcrumbsData = {
  breadcrumbs: [
    { href: '/', name: 'Домой' },
    { href: '/projects', name: 'Все проекты' },
  ],
};

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [otherProjects, setOtherProjects] = useState([]);

  const { isLoading, projectData } = useGetProject(id);
  const { areProjectsLoading, allProjectsData } = useGetAllProjects();

  const { breadcrumbs } = breadcrumbsData;

  const refToAnimate = useRef(null);

  useEffect(() => {
    if (!!refToAnimate?.current) {
      splitWords(refToAnimate.current);
    }
  }, []);

  useEffect(() => {
    if (!!projectData) {
      setProject(projectData.data[0]);
    }
    if (!!allProjectsData) {
      setOtherProjects(allProjectsData.data.projects);
    }
  }, [projectData, allProjectsData]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : !!project ? (
        <div className={styles.project}>
          <div
            className={styles.background}
            style={{
              backgroundImage: `url(http://popenkov.site${project.img})`,
            }}
          >
            <div className={styles.container}>
              <BreadCrumbs breadcrumbs={breadcrumbs} />
              <h1 className={styles.title}>{project.title}</h1>
              {project.preview && (
                <p className={styles.preview} ref={refToAnimate}>
                  {project.preview}
                </p>
              )}
              {project.links && (
                <div className={styles.links}>
                  {project.links.map((item, index) => {
                    return (
                      <a
                        className={styles.link}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className={styles.description}>
            {project.task && (
              <p
                className={styles.task}
                dangerouslySetInnerHTML={{ __html: project.task }}
              ></p>
            )}
            {project.role && (
              <div className={styles.role}>
                <p className={styles.roleTitle}>My role:</p>
                <p className={styles.roleText}>{project.role}</p>
              </div>
            )}
            {project.tags && (
              <div className={styles.technologoies}>
                <p className={styles.technologoiesTitle}>Technologoies:</p>
                <div className={styles.technologoiesTags}>
                  {project.tags.map((item, index) => {
                    return (
                      <p key={index} className={styles.technologoiesTag}>
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
            {project.text && <p className={styles.text}>{project.text}</p>}
          </div>
          <OtherProjects data={otherProjects} currentIndex={id} />
        </div>
      ) : (
        <p>Not found</p>
      )}

      <Footer />
    </>
  );
}

// <div className={styles.project}>
//   <div className={styles.background} style={{ backgroundImage: `url(${img})` }}>
//     <div className={styles.container}>
//       <BreadCrumbs breadcrumbs={breadcrumbs} />
//       <h1 className={styles.title}>{title}</h1>
//       {preview && (
//         <p className={styles.preview} ref={refToAnimate}>
//           {preview}
//         </p>
//       )}
//       {links && (
//         <div className={styles.links}>
//           {links.map((item, index) => {
//             return (
//               <a
//                 className={styles.link}
//                 href={item.href}
//                 target="_blank"
//                 rel="noreferrer"
//                 key={index}
//               >
//                 {item.title}
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   </div>
//   <div className={styles.description}>
//     {task && (
//       <p className={styles.task} dangerouslySetInnerHTML={{ __html: task }}></p>
//     )}
//     {role && (
//       <div className={styles.role}>
//         <p className={styles.roleTitle}>Моя роль:</p>
//         <p className={styles.roleText}>{role}</p>
//       </div>
//     )}
//     {tags && (
//       <div className={styles.technologoies}>
//         <p className={styles.technologoiesTitle}>Используемые технологии:</p>
//         <div className={styles.technologoiesTags}>
//           {tags.map((item, index) => {
//             return (
//               <p key={index} className={styles.technologoiesTag}>
//                 {item}{' '}
//               </p>
//             );
//           })}
//         </div>
//       </div>
//     )}
//     {text && <p className={styles.text}>{text}</p>}
//   </div>
//   <OtherProjects data={otherProjects} currentIndex={id} />
// </div>;

export default Project;
