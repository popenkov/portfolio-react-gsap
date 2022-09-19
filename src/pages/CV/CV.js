import styles from './CV.module.scss';

function CV() {
  return (
    <div className={styles.cv}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="https://images.unsplash.com/photo-1663498387904-d8d7d513814c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className={styles.img}
          />
          <h2 className={styles.name}>Попенков Антон</h2>
          <p className={styles.position}>Frontend-разработчик</p>
        </div>
        <div className={styles.contacts}></div>

        <div className={styles.descrition}>
          <div className={styles.descritionItem}>
            <h3 className={styles.descritionTitle}>Обо мне</h3>
            <div className={styles.descritionValue}>Lorem ipsum</div>
          </div>
          <div className={styles.descritionItem}>
            <h3 className={styles.descritionTitle}>Обо мне</h3>
            <div className={styles.descritionValue}>Lorem ipsum</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
