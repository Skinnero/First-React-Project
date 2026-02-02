import styles from './Card.module.scss';
import {clsx} from "clsx";
import {useDispatch} from "react-redux";
import {toggleFavoriteCard} from "../../redux/store";

const Card = props => {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleFavoriteCard(props.id))
  }

  return (
      <li className={styles.card} key={props.id}>
        {props.title}
        <i onClick={handleClick} className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.favoriteColor)} ></i>
      </li>
  );
};

export default Card;