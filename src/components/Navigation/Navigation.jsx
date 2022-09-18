import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import gsap, { Expo } from 'gsap';
import styles from './Navigation.module.scss';

//
function Navigation({ isOpen, onClose }) {
  let menu = useRef(null);
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);

  const tl_popup = useRef();

  useEffect(() => {
    tl_popup.current = gsap
      .timeline({ paused: true })
      .to(menu, {
        duration: 1,
        x: '0%',
        ease: Expo.easeInOut,
      })
      .fromTo(
        [li1, li2, li3, li4],
        {
          y: '-100%',
          autoAlpha: 0,
        },
        {
          duration: 0.5,
          autoAlpha: 1,
          y: '0%',
          stagger: 0.25,
        }
      );
  }, []);

  useEffect(() => {
    console.log('isOpenUseEffect');
    tl_popup.current.reversed(!isOpen);
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen]);

  const openMenu = () => {
    tl_popup.current.play();
  };
  const closeMenu = () => {
    tl_popup.current.reverse();
  };

  return ReactDOM.createPortal(
    <>
      <div ref={(el) => (menu = el)} className={styles.menu}>
        <div className={styles.button} onClick={onClose}>
          X
        </div>
        <nav>
          <ul className={styles.navigationList}>
            <li ref={(el) => (li1 = el)} className={styles.navigationItem}>
              <Link to="/" className={styles.navigationLink}>
                Home
              </Link>
            </li>
            <li ref={(el) => (li2 = el)} className={styles.navigationItem}>
              <Link to="/projects" className={styles.navigationLink}>
                Projects
              </Link>
            </li>
            <li ref={(el) => (li3 = el)} className={styles.navigationItem}>
              <Link to="/blog" className={styles.navigationLink}>
                Block
              </Link>
            </li>
            <li ref={(el) => (li4 = el)} className={styles.navigationItem}>
              <Link to="#" className={styles.navigationLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className={styles.social}>
          <ul className={styles.socialList}>
            <li ref={(el) => (social1 = el)} className={styles.socialItem}>
              <a href="#" className={styles.socialLink}>
                facebook
              </a>
            </li>
            <li ref={(el) => (social2 = el)} className={styles.socialItem}>
              <a href="#" className={styles.socialLink}>
                instagram
              </a>
            </li>
            <li ref={(el) => (social3 = el)} className={styles.socialItem}>
              <a href="#" className={styles.socialLink}>
                twitter
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>,
    document.body
  );
}

export default Navigation;
