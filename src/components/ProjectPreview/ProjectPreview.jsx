import { Link } from 'react-router-dom';

import arrow from '../../Assets/arrow.svg';
import styles from './ProjectPreview.module.scss';

function ProjectPreview() {
  return (
    <div className="project-page-item">
      <div className="project-page-item-number">
        <p>01/06</p>
      </div>
      <Link to="/">
        <div className="project-page-item-header">
          <h1>Lorem, ipsum.</h1>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="project-page-item-image project-page-item-image1"></div>
        <div className="project-page-item-footer">
          <p>Lorem ipsum dolor sit amet.</p>
          <img src={arrow} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default ProjectPreview;
