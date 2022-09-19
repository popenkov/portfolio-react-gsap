import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import styles from './CursorFollower.module.scss';

function CursorFollower() {
  let cursor = useRef(null);
  let posX1 = useRef(null);
  let posY1 = useRef(null);
  let mouseX1 = useRef(null);
  let mouseY1 = useRef(null);

  let tl = useRef(null);
  let tl2 = useRef(null);

  useEffect(() => {
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;
    tl.current = gsap.timeline().to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.current.set(cursor, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });
    document.addEventListener('mousemove', function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    tl2.current = gsap.timeline().from(
      cursor,
      {
        duration: 1.5,
        delay: 2,
        opacity: 0,
      },
      '-=1'
    );
  }, []);

  return (
    <div className={styles.cursorFollower} ref={(el) => (cursor = el)}></div>
  );
}

export default CursorFollower;
