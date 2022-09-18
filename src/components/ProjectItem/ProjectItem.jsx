import clsx from 'clsx';
import { Link } from 'react-router-dom';
import enter from '../../Assets/enter.svg';
import styles from './ProjectItem.module.scss';

function ProjectItem({ name, _id, img, page = 'projects' }) {
  return (
    <Link
      to={_id}
      className={clsx(styles.container, {
        [styles.home]: page === 'home',
        [styles.projects]: page === 'projects',
      })}
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className={styles.hover}>
        <img src={enter} className={styles.icon} />
      </div>
      <div className={styles.title}>
        <Link to="/" className={styles.link}>
          {name}
        </Link>
      </div>
    </Link>
  );
}

export default ProjectItem;
