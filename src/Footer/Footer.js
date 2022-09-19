import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
function Footer() {
  const now = new Date();
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p>2019-{now.getFullYear()} POPENKOV ANTON</p>
          </div>
          <div className={styles.footerBottomRight}>
            <a href="mailto:popenkovaa@yandex.ru" className={styles.socialLink}>
              Mail
            </a>
            <a
              href="https://www.instagram.com/popenkovdev/"
              className={styles.socialLink}
            >
              Instagram
            </a>
            <a
              href="https://t.me/popenkovdev"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              Telegram
            </a>
            <a
              href="https://github.com/popenkov"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
