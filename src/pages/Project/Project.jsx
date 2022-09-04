import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

import styles from './Project.module.scss';

const data = {
  breadcrumbs: [
    { href: '/', name: 'Домой' },
    { href: '/blog', name: 'Все посты' },
  ],
  title: 'Тестовый проект',
  preview: 'Проект магазина сантехники',
  date: '123123123',
  links: [
    {
      title: 'GitHub',
      href: '#',
    },
  ],
  img: 'https://images.unsplash.com/photo-1662288346057-6190cf5d7b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1270&q=80',
  task: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  role: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  tags: ['react', 'test'],
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

function Project() {
  const { id } = useParams();
  return (
    <div>
      Project: ${id}
      <div className={styles.container}>
        <BreadCrumbs breadcrumbs={data.breadcrumbs} />
        <h1 className={styles.title}>{data.title}</h1>
        {data.date && <p className={styles.date}>{data.date}</p>}
        {data.preview && <p className={styles.preview}>{data.preview}</p>}
        {data.links && (
          <p className={styles.links}>
            {data.links.map((item, index) => {
              return (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  {item.title}
                </a>
              );
            })}
          </p>
        )}

        <img className={styles.img} src={data.img} />
        <div className={styles.description}>
          {data.task && <p className={styles.task}>{data.task}</p>}
          {data.role && <p className={styles.role}>{data.role}</p>}
          {data.tags && (
            <p className={styles.tags}>
              {data.tags.map((item, index) => {
                return <p key={index}>{item} </p>;
              })}
            </p>
          )}
          {data.text && <p className={styles.text}>{data.text}</p>}
        </div>
      </div>
    </div>
  );
}

export default Project;
