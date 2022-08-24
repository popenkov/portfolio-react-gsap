import clsx from 'clsx';
import styles from './Footer.module.scss';
function Footer() {
  const now = new Date();
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.contactMe}>
            Please contact me in any way you like
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialHeader}>Social</div>
            <div className={styles.socialItems}>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">Github</a>
              <a href="">LinkedIn</a>
              <a href="">Snapchat</a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialHeader}>Contact</div>
            <div className={styles.socialItems}>
              <a href="">Mail</a>
              <a href="">Whatsapp</a>
              <a href="https://t.me/popenkovdev" target="_blank">
                Telegram
              </a>
            </div>
          </div>
          <div className={clsx(styles.socialLinks, styles.footerMenu)}>
            <div className={clsx(styles.socialHeader, styles.footerMenuHeader)}>
              Site map
            </div>
            <div className={clsx(styles.socialItems, styles.footerMenuLinks)}>
              <p className={styles.footerMenuItems}>Home.</p>
              <p className={styles.footerMenuItems}>About.</p>
              <p className={styles.footerMenuItems}>Projects.</p>
              <p className={styles.footerMenuItems}>Contact.</p>
            </div>
          </div>
          {/* <div className={styles.footerBtn}>
            <a href="" className={styles.footerBtnLink}>
              Get Started!
            </a>
          </div> */}
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p>{now.getFullYear()} POPENKOV ANTON</p>
          </div>
          <div className={styles.footerBottomRight}>
            {/* <p>{now.getFullYear()} POPENKOV ANTON </p> */}
          </div>
        </div>
      </div>
      {/* <div className="footer-ticker">
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
        <div className="footer-ticker-item">&nbsp; - Anton Popenkov </div>
      </div> */}
    </div>
  );
}

export default Footer;
