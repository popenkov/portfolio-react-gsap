import { Link } from 'react-router-dom';
import enter from '../../Assets/enter.svg';
import styles from './ProjectItem.module.scss';

function ProjectItem({ name, backgroundImg }) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("${backgroundImg}")` }}
    >
      <div className={styles.hover}>
        <img src={enter} className={styles.icon} />
      </div>
      <div className={styles.title}>
        <Link to="/" className={styles.link}>
          {name}
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
