import styles from './List.module.scss'
import Column from "../Column/Column";


const List = () => {
  return (
      <div>
        <div className={styles.header}>
          <header className={styles.title}>THINGS TO DO<span>SOON!</span></header>
        </div>
        <p className={styles.description}>Interesting things i want to check out!</p>
        <div className={styles.columns}>
          <Column title={"Books"} icon={"book"}/>
          <Column title={"Movies"} icon={"film"}/>
          <Column title={"Games"} icon={"gamepad"}/>
        </div>
      </div>
  );
};

export default List;