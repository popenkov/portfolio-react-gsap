import { useRef, useEffect } from 'react';
import TagCloud from 'TagCloud';
import styles from './TagCloud.module.scss';

const myTags = [
  'JavaScript',
  'CSS',
  'HTML',
  'NextJS',
  'React',
  '<h1>Hello, world!</h1>',
  'img {animation: animate-rotate 10s infinite linear;}',
  'import { useRef, useEffect } from "react"',
  'const checkIsIOS = () =>  /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;',
  'interface UserAccount { id: number; email?: string;}',
];

function Tags() {
  const cloudRef = useRef(null);
  useEffect(() => {
    const tagCloud = TagCloud(cloudRef.current, myTags, {
      // radius in px
      radius: 250,
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'normal',
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
