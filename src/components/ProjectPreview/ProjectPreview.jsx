import { Link } from 'react-router-dom';

import arrow from '../../Assets/arrow.svg';
import styles from './ProjectPreview.module.scss';

function ProjectPreview({ _id, title, tags, createdAt, viewsCount, imageUrl }) {
  const date = new Date(createdAt);

  return (
    <Link to={`/blog/${_id}`}>
      <div className={styles.project}>
        <p className={styles.projectNumber}>
          {date.toLocaleDateString().split('.').join('/')}
        </p>

        <div className={styles.header}>
          <h2>{title}</h2>
          <p>{123}</p>
        </div>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className={styles.footer}>
          <p>Lorem ipsum dolor sit amet.</p>
          <img className={styles.arrow} src={arrow} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default ProjectPreview;
