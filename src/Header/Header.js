import gsap from 'gsap';
import { useRef, useEffect, useState, createContext, useContext } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import MenuIcon from '../Assets/menu.svg';
import Navigation from '../components/Navigation/Navigation';

const Header = () => {
  // const [isOpen, setIsOpen] = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  let li1 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);
  let li5 = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const timeline = gsap.timeline();
  useEffect(() => {
    timeline.from([li1, li3, li4], {
      opacity: 0,
      duration: 1,
      delay: 0.2,
      y: 20,
      stagger: {
        amount: 0.6,
      },
    });
  });
  return (
    <>
      <div>
        <header className={styles.header}>
          <div id="logo" className={styles.logo}></div>
          <div className={styles.toggleMenu}>
            <button type="button" className={styles.button} onClick={openModal}>
              <img src={MenuIcon} alt="" />
            </button>
          </div>
          <ul className={styles.menuItems}>
            <li className={styles.menuItem} ref={(el) => (li1 = el)}>
              <Link to="/" className={styles.menuItemLink}>
                Home
              </Link>
            </li>
            <li className={styles.menuItem} ref={(el) => (li3 = el)}>
              <Link to="/projects" className={styles.menuItemLink}>
                Projects
              </Link>
            </li>
            <li className={styles.menuItem} ref={(el) => (li4 = el)}>
              <Link to="/blog" className={styles.menuItemLink}>
                Blog
              </Link>
            </li>
            {/* <li className={styles.menuItem} ref={(el) => (li5 = el)}>
              <Link to="/contacts" className={styles.menuItemLink}>
                Contacts
              </Link>
            </li> */}
          </ul>
        </header>
      </div>
      <Navigation isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
