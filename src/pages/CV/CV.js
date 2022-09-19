import styles from './CV.module.scss';

function CV() {
  return (
    <div className={styles.cv}>
      <div className={styles.header}>
        <img src="#" className={styles.img} />
        <h2 className={styles.name}></h2>
        <h2 className={styles.position}></h2>
      </div>
      <div className={styles.contacts}></div>

      <div className={styles.descrition}>
        <div className={styles.descritionItem}>
          <h3 className={styles.descritionTitle}>Обо мне</h3>
          <div className={styles.descritionValue}>Lorem ipsum</div>
        </div>
      </div>
    </div>
  );
}

export default CV;
