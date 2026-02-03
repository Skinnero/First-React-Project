import styles from './CardForm.module.scss';
import {useState} from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Buttton/Button";
import {useDispatch} from "react-redux";
import {addCard} from "../../redux/cardsRedux";

const CardForm = props => {

  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({...props, title}));
    setTitle('');
  }

  return (
      <form className={styles.cardForm} onSubmit={handleSubmit}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
        <Button>Add card</Button>
      </form>
  );
};

export default CardForm;