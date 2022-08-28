import { Link } from 'react-router-dom';

import arrow from '../../Assets/arrow.svg';
import styles from './ProjectsLink.module.scss';

function ProjectsLink() {
  return (
    <div className={styles.projects}>
      <Link className={styles.projectsLink} to="/projects">
        All Projects and Works <img src={arrow} alt="" />
      </Link>
      {/* <p>Кликни на ссылку</p> */}
    </div>
  );
}

export default ProjectsLink;
