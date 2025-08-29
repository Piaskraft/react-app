import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>
        THINGS TO DO <span>SOON</span>
      </h2>
    </section>
  );
}
