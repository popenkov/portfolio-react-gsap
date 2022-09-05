import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

import styles from './Project.module.scss';

const data = {
  breadcrumbs: [
    { href: '/', name: 'Домой' },
    { href: '/blog', name: 'Все посты' },
  ],
  title: 'Сайт портфолио',
  preview:
    'Мой личный сайт-портфолио, описываеющий мой опыт во фронтенд-разработке',
  date: '123123123',
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
};

function Project() {
  const { id } = useParams();
  return (
    <div className={styles.project}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className={styles.container}>
          <BreadCrumbs breadcrumbs={data.breadcrumbs} />
          <h1 className={styles.title}>{data.title}</h1>
          {data.preview && <p className={styles.preview}>{data.preview}</p>}
          {data.links && (
            <div className={styles.links}>
              {data.links.map((item, index) => {
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
      {/* <img className={styles.img} src={data.img} /> */}
      <div className={styles.description}>
        {data.task && (
          <p
            className={styles.task}
            dangerouslySetInnerHTML={{ __html: data.task }}
          ></p>
        )}
        {data.role && (
          <div className={styles.role}>
            <p className={styles.roleTitle}>Моя роль:</p>
            <p className={styles.roleText}>{data.role}</p>
          </div>
        )}
        {data.tags && (
          <div className={styles.technologoies}>
            <p className={styles.technologoiesTitle}>
              Используемые технологии:
            </p>
            <div className={styles.technologoiesTags}>
              {data.tags.map((item, index) => {
                return (
                  <p key={index} className={styles.technologoiesTag}>
                    {item}{' '}
                  </p>
                );
              })}
            </div>
          </div>
        )}
        {data.text && <p className={styles.text}>{data.text}</p>}
      </div>
    </div>
  );
}

export default Project;
