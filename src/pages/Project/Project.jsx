import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import OtherProjects from '../../components/OtherProjects/OtherProjects';
import Footer from '../../Footer/Footer';
import { splitWords } from '../../utils/textAnimation';

import styles from './Project.module.scss';

const data = {
  breadcrumbs: [
    { href: '/', name: 'Домой' },
    { href: '/projects', name: 'Все проекты' },
  ],
  items: [
    {
      title: 'Сайт портфолио',
      preview:
        'Мой личный сайт-портфолио, описываеющий мой опыт во фронтенд-разработке',
      links: [
        {
          title: 'GitHub',
          href: 'https://github.com/popenkov/portfolio-react-gsap',
        },
        {
          title: 'Посмотреть вживую',
          href: 'https://github.com/popenkov/portfolio-react-gsap',
        },
      ],
      img: 'https://images.unsplash.com/photo-1662288346057-6190cf5d7b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1270&q=80',
      task: '<p>Задача проекта заключалась в создании единой площадки, где я мог бы презентовать свои наработки во фронтенде и вести свой дневник для систематизации полученных знаний. Для этой цели мной был написан API для блога и постов на NodeJS, Express, NestJS. </p><p> Одной из задач было также попробовать анимации в связки с React. Для этого я использовал библиотку GSAP.</p>',
      role: 'Frontend-разработчик, Backend-разработчик',
      duration: null,
      tags: ['React', 'GSAP', 'NodeJS'],
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Онлайн-галерея работ фотографа',
      preview: 'Мой личный сайт-портфолио как фотографа с галереей моих работ',
      links: [
        {
          title: 'GitHub',
          href: 'https://github.com/popenkov/portfolio-react-gsap',
        },
        {
          title: 'Посмотреть вживую',
          href: 'https://github.com/popenkov/portfolio-react-gsap',
        },
      ],
      img: 'https://images.unsplash.com/photo-1662288346057-6190cf5d7b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1270&q=80',
      task: '<p>Задача проекта заключалась в создании единой площадки, где я мог бы презентовать свои наработки во фронтенде и вести свой дневник для систематизации полученных знаний. Для этой цели мной был написан API для блога и постов на NodeJS, Express, NestJS. </p><p> Одной из задач было также попробовать анимации в связки с React. Для этого я использовал библиотку GSAP.</p>',
      role: 'Frontend-разработчик, Backend-разработчик',
      duration: null,
      tags: ['React', 'GSAP', 'NodeJS'],
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ],

  otherProjects: [
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
  ],
};
function Project() {
  const { id } = useParams();
  const { breadcrumbs, otherProjects } = data;
  const { title, preview, links, img, task, role, duration, tags, text } =
    data.items[id];
  const refToAnimate = useRef(null);

  useEffect(() => {
    splitWords(refToAnimate.current);
  }, []);

  return (
    <>
      <div className={styles.project}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.container}>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <h1 className={styles.title}>{title}</h1>
            {preview && (
              <p className={styles.preview} ref={refToAnimate}>
                {preview}
              </p>
            )}
            {links && (
              <div className={styles.links}>
                {links.map((item, index) => {
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
        {/* <img className={styles.img} src={img} /> */}
        <div className={styles.description}>
          {task && (
            <p
              className={styles.task}
              dangerouslySetInnerHTML={{ __html: task }}
            ></p>
          )}
          {role && (
            <div className={styles.role}>
              <p className={styles.roleTitle}>Моя роль:</p>
              <p className={styles.roleText}>{role}</p>
            </div>
          )}
          {tags && (
            <div className={styles.technologoies}>
              <p className={styles.technologoiesTitle}>
                Используемые технологии:
              </p>
              <div className={styles.technologoiesTags}>
                {tags.map((item, index) => {
                  return (
                    <p key={index} className={styles.technologoiesTag}>
                      {item}{' '}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {text && <p className={styles.text}>{text}</p>}
        </div>
        <OtherProjects data={otherProjects} currentIndex={id} />
      </div>
      <Footer />
    </>
  );
}

export default Project;
