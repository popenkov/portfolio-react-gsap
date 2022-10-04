import { Link } from 'react-router-dom';

import arrow from '../../Assets/arrow.svg';
import styles from './ProjectPreview.module.scss';

function ProjectPreview({ _id, title, tags, createdAt, viewsCount, imageUrl }) {
  const date = new Date(createdAt);

  console.log(imageUrl);

  return (
    <Link to={`/blog/${_id}`} className={styles.project}>
      <p className={styles.date}>
        {date.toLocaleDateString().split('.').join('/')}
      </p>

      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(http://popenkov.site/{imageUrl})` }}
      ></div>
      <div className={styles.footer}>
        <p className={styles.footerText}>Читать полностью</p>
        <img className={styles.arrow} src={arrow} alt="" />
      </div>
    </Link>
  );
}

export default ProjectPreview;
