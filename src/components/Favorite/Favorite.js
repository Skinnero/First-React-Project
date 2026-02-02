import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import {getFavoriteCards} from "../../redux/store";
import {useSelector} from "react-redux";


const Favorite = () => {

  const cards = useSelector(getFavoriteCards);

  return (
      <>
        <PageTitle title={"Favorite"}></PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
          </ul>
        </article>
      </>
  );
}

export default Favorite;