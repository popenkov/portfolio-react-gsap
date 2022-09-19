import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.scss';

function Loader() {
  const load = useRef();
  let loader = useRef(null);
  let progress = useRef(null);
  let percent = useRef(null);
  let bar = useRef(null);
  let barc = useRef(null);

  let id;
  let width1 = 1;

  const loading = () => {
    id = setInterval(frame, 20);
  };
  const frame = () => {
    if (width1 >= 100) {
      clearInterval(id);
      load.current.play();
    } else {
      width1++;
      document.getElementById('barc').style.width = width1 + '%';
      document.getElementById('percent').innerHTML = width1 + '%';
    }
  };

  useEffect(() => {
    load.current = gsap
      .timeline({
        paused: 'true',
      })
      .to([percent, bar], {
        duration: 0.2,
        opacity: 0,
        zIndex: -1,
      })
      .to(progress, {
        duration: 0.8,
        width: '0%',
      })
      .to(loader, {
        visibility: 'hidden',
        zIndex: -1,
      });

    loading();
  }, []);

  return (
    <div className={styles.loader} ref={(el) => (loader = el)}>
      <div className={styles.progress} ref={(el) => (progress = el)}>
        <div
          id="percent"
          className={styles.percent}
          ref={(el) => (percent = el)}
        >
          1%
        </div>
        <div id="bar" className={styles.bar} ref={(el) => (bar = el)}>
          <div
            id="barc"
            className={styles.barc}
            ref={(el) => (barc = el)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
