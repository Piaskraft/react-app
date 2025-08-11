import styles from './List.module.scss';
import { articles } from '../data/articles';

const List = () => {
  return (
    <section className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do <span>soon</span>
        </h2>
      </header>

      <p className={styles.description}>
        Interesting things I need to check
      </p>

      <section className={styles.columns}>
        {articles.map(item => (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default List;
