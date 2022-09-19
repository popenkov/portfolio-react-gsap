import clsx from 'clsx';
import { Link } from 'react-router-dom';
import enter from '../../Assets/enter.svg';
import styles from './ProjectItem.module.scss';

function ProjectItem({ title, _id, img, preview, page = 'projects' }) {
  return (
    <Link
      to={`/projects/${_id}`}
      className={clsx(styles.container, {
        [styles.home]: page === 'home',
        [styles.projects]: page === 'projects',
      })}
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className={styles.hover}>
        <img src={enter} className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <h2 to={`/${_id}`} className={styles.title}>
          {title}
        </h2>
        <p
          className={clsx(styles.preview, {
            [styles.hide]: page === 'home',
            [styles.show]: page === 'projects',
          })}
        >
          {preview}
        </p>
      </div>
    </Link>
  );
}

export default ProjectItem;