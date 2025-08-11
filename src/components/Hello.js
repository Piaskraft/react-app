import styles from './Hero.module.scss';

const Hero = () => (
  <header className={styles.hero}>
    <h1 className={styles.title}>My first React App</h1>
    <p className={styles.lead}>A simple to-do app, with lists, columns and card</p>
  </header>
);
export default Hero;
