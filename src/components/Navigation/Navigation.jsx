import { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import gsap, { Expo } from 'gsap';
import styles from './Navigation.module.scss';

//
function Navigation({ isOpen, onClose }) {
  // const [isOpen, setIsOpen] = useNavigation();
  useEffect(() => {
    tl.play();

    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen]);
  let menu = useRef(null);
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);
  let social1 = useRef(null);
  let social2 = useRef(null);
  let social3 = useRef(null);
  let social4 = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const tl = gsap.timeline({
    paused: 'true',
  });
  useEffect(() => {
    tl.to(menu, {
      duration: 1,
      // x: '0%',
      ease: Expo.easeInOut,
    });
    tl.fromTo(
      [li1, li2, li3, li4],
      {
        // y: '-100%',
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        // y: '0%',
        stagger: 0.25,
      }
    );
    tl.fromTo(
      [social1, social2, social3],
      {
        // y: '-50%',
        opacity: 0,
      },
      {
        duration: 0.8,
        opacity: 1,
        stagger: 0.25,
        ease: Expo.easeOut,
      },
      '-=0.5'
    );
  }, []);

  const openMenu = () => {
    console.log('open menu');
    tl.play();
  };
  const closeMenu = () => {
    console.log('closeMenu');
    tl.reverse();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div ref={(el) => (menu = el)} className={styles.menu}>
      <div className={styles.button} onClick={onClose}>
        X
      </div>
      <nav>
        <ul className={styles.navigationList}>
          <li ref={(el) => (li1 = el)} className={styles.navigationItem}>
            <Link to="#" className={styles.navigationLink}>
              Home
            </Link>
          </li>
          <li ref={(el) => (li2 = el)} className={styles.navigationItem}>
            <Link to="#" className={styles.navigationLink}>
              About
            </Link>
          </li>
          <li ref={(el) => (li3 = el)} className={styles.navigationItem}>
            <Link to="#" className={styles.navigationLink}>
              Services
            </Link>
          </li>
          <li ref={(el) => (li4 = el)} className={styles.navigationItem}>
            <Link to="#" className={styles.navigationLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.social}>
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
      </div>
    </div>,
    document.body
  );
}

export default Navigation;
