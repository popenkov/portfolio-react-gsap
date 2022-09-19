import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Header from '../../components/Header/Header';
import styles from './Contacts.module.scss';
import Footer from '../../components/Footer/Footer';

function Contacts() {
  const timeline_contact = gsap.timeline();
  let text1 = useRef(null);
  useEffect(() => {
    timeline_contact.from(
      text1,
      {
        duration: 1,
        skewY: 10,
        y: 500,
        stagger: {
          amount: 0.4,
        },
        opacity: 0,
      },
      '-=1'
    );
  });
  return (
    <div>
      <Header />
      <div className={styles.contacts}>
        <div className={styles.container}>
          <h1 ref={(el) => (text1 = el)}>
            Let's talk about <br /> the project?
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
