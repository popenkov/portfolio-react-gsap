import { Link } from 'react-router-dom';
import styles from './BreadCrumbs.module.scss';

function BreadCrumbs({ breadcrumbs }) {
  return (
    <div className={styles.container}>
      {breadcrumbs.map((item, index) => {
        return (
          <Link to={item.href} className={styles.link} key={item.href}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default BreadCrumbs;
