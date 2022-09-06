import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from '../../hooks/useIsMobile';
import ProjectItem from '../ProjectItem/ProjectItem';
import styles from './OtherProjects.module.scss';

function OtherProjects({ data, currentIndex }) {
  const [projects, setProjects] = useState(data);
  useEffect(() => {
    const projectsToDraw = projects.filter((item) => {
      return item.id != currentIndex;
    });
    setProjects(projectsToDraw);
  }, [data]);
  return (
    <div className={styles.container}>
      <h3>Мои другие проекты:</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={useIsMobile() ? 2 : 3}
        allowTouchMove
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((item) => {
          return (
            <SwiperSlide>
              <ProjectItem {...item} key={item.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default OtherProjects;
