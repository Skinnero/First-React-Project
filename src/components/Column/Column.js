import styles from './Column.module.scss';

const Column = props => {
  return (
      <article className={styles.column}>
        <header className={styles.title}>
          <span className={styles.icon + ' fa fa-' + props.icon}/>
          {props.title}
        </header>
      </article>
  );
};

export default Column;