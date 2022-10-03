import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useIsMobile from '../../hooks/useIsMobile';
import ProjectItem from '../ProjectItem/ProjectItem';
import styles from './OtherProjects.module.scss';

function OtherProjects({ data, currentIndex }) {
  console.log(data, currentIndex);
  const [projects, setProjects] = useState(data);
  const isMobile = useIsMobile();
  useEffect(() => {
    const projectsToDraw = data.filter((item) => {
      return item._id != currentIndex;
    });
    setProjects(projectsToDraw);
  }, [data]);

  return (
    <>
      {projects?.length > 0 ? (
        <div className={styles.container}>
          <h3>My other projects:</h3>
          <Swiper
            spaceBetween={50}
            slidesPerView={isMobile ? 2 : 3}
            allowTouchMove
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {projects.map((item) => {
              return (
                <SwiperSlide>
                  <ProjectItem {...item} key={item._id} page="otherProjects" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <p>Другие проекты не найдены</p>
      )}
    </>
  );
}

export default OtherProjects;
