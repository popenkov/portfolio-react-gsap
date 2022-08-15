import React from 'react';
import styles from './Skills.module.scss';

const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Figma'];

function Skills() {
  return (
    <div className={styles.skills}>
      {skills.map((item, id) => {
        return (
          <div className={styles.animationBtn}>
            <span>{item}</span>
            <div className={styles.marquee} aria-hidden="true">
              <div className={styles.marqueeInner}>
                {new Array(8).fill(item).map((item, index) => {
                  return <span>{item}</span>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
