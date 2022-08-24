import { Link } from 'react-router-dom';

import arrow from '../../Assets/arrow.svg';
import styles from './ProjectPreview.module.scss';

function ProjectPreview() {
  return (
    <div className={styles.project}>
      <p className={styles.projectNumber}>01/06</p>
      <Link to="123">
        <div className={styles.header}>
          <h2>Lorem, ipsum.</h2>
          <p>Lorem, ipsum.</p>
        </div>
        <div className={styles.img}></div>
        <div className={styles.footer}>
          <p>Lorem ipsum dolor sit amet.</p>
          <img className={styles.arrow} src={arrow} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default ProjectPreview;
