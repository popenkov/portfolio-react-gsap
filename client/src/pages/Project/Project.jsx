import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import OtherProjects from '../../components/OtherProjects/OtherProjects';
import Footer from '../../components/Footer/Footer';
import { useGetAllProjects } from '../../hooks/useAllProjects';
import { useGetProject } from '../../hooks/useProject';
import { splitWords } from '../../utils/textAnimation';

import styles from './Project.module.scss';
import { ArrowSvg } from '../../components/ui/icons';

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
          <Link to={'/projects'} className={styles.backLink}>
            <ArrowSvg className={styles.backSvg} />
            <span className={styles.backText}>Go back</span>
          </Link>
          <div className={styles.container}>
            <img
              src={'http://popenkov.site' + project.img}
              className={styles.img}
            />
            <div className={styles.textContainer}>
              <div className="content__group">
                <h2 className={styles.title}> {project.title}</h2>

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
                            {item}{' '}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}
                {project.text && <p className={styles.text}>{project.text}</p>}
              </div>
            </div>
          </div>
          <div className={styles.otherProjects}>
            <OtherProjects data={otherProjects} currentIndex={id} />
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}

      <Footer />
    </>
  );
}

export default Project;
