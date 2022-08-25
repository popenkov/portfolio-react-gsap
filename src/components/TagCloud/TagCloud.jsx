import { useRef, useEffect } from 'react';
import TagCloud from 'TagCloud';
import styles from './TagCloud.module.scss';

const myTags = [
  'JavaScript',
  'CSS',
  'HTML',
  'C',
  'C++',
  'React',
  'Python',
  'Java',
  'git',
  'django',
  'Node.js',
  'OpenCV',
  'GCP',
  'MySQL',
  'jQuery',
];

function Tags() {
  const cloudRef = useRef(null);
  useEffect(() => {
    const tagCloud = TagCloud(cloudRef.current, myTags, {
      // radius in px
      radius: 250,
      // slow, normal, fast
      maxSpeed: 'fast',
      initSpeed: 'fast',
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      keep: true,
    });
  }, []);

  return <div className={styles.tags} ref={cloudRef}></div>;
}

export default Tags;
