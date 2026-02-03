import styles from './Card.module.scss';
import {clsx} from "clsx";
import {useDispatch} from "react-redux";
import {removeCard, toggleFavoriteCard} from "../../redux/cardsRedux";

const Card = props => {

  const dispatch = useDispatch();

  const handleClickAdd = () => {
    dispatch(toggleFavoriteCard(props.id))
  }

  const handleClickRemove = () => {
    dispatch(removeCard(props.id))
  }

  return (
      <li className={styles.card} key={props.id}>
        {props.title}
        <div className={styles.buttons}>
          <i onClick={handleClickAdd} className={clsx("fa fa-star-o", styles.addButton, props.isFavorite && styles.favoriteColor)} ></i>
          <i onClick={handleClickRemove} className={clsx("fa fa-trash", styles.removeButton)} ></i>
        </div>
      </li>
  );
};

export default Card;