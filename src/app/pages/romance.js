import styles from '../styles/Romance.module.css';

export default function Romance() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="/bear-heart.png" alt="Bear with heart" className={styles.image} />
        <h2 className={styles.question}>
          Will you be my <span>Valentine?</span>
        </h2>
        <div className={styles.buttons}>
          <button className={styles.yes}>Yes</button>
          <button className={styles.no}>No</button>
        </div>
      </div>
    </div>
  );
} 