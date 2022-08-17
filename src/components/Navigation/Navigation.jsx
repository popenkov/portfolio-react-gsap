import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import gsap, { Expo } from 'gsap';
import styles from './Navigation.module.scss';

function Navigation({ isOpen, onClose }) {
  useEffect(() => {
    console.log(isOpen);
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

  const tl = gsap.timeline({
    paused: 'true',
  });
  tl.to(menu, {
    duration: 1,
    x: '0%',
    ease: Expo.easeInOut,
  });
  tl.fromTo(
    [li1, li2, li3, li4],
    {
      y: '-100%',
      opacity: 0,
    },
    {
      duration: 0.5,
      opacity: 1,
      y: '0%',
      stagger: 0.25,
    }
  );
  tl.fromTo(
    [social1, social2, social3],
    {
      y: '-50%',
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

  const openMenu = () => {
    tl.play();
  };
  const closeMenu = () => {
    tl.reverse();
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div ref={menu} className={styles.menu}>
      <div className="button" onClick={closeMenu}>
        close
      </div>

      <ul className="ul">
        <li ref={li1} className="li1 li">
          <a href="#">Home</a>
        </li>
        <li ref={li2} className="li2 li">
          <a href="#">About</a>
        </li>
        <li ref={li3} className="li3 li">
          <a href="#">Services</a>
        </li>
        <li ref={li4} className="li4 li">
          <a href="#">Contact</a>
        </li>
        {/* <div className="bg1 bg"></div>
        <div className="bg2 bg"></div>
        <div className="bg3 bg"></div>
        <div className="bg4 bg"></div> */}
      </ul>
      <div className="social">
        <ul>
          <li ref={social1} className="social-li">
            <a href="#">facebook</a>
          </li>
          <li ref={social2} className="social-li">
            <a href="#">instagram</a>
          </li>
          <li ref={social3} className="social-li">
            <a href="#">twitter</a>
          </li>
        </ul>
      </div>
    </div>,
    document.body
  );
}

export default Navigation;
