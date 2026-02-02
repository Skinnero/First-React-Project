import styles from './NavBar.module.scss';
import Container from "../Container/Container";
import {NavLink} from "react-router-dom";


const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <a href='/'><i className="fa fa-tasks"></i></a>
      </Container>
      <Container>
        <NavLink className={({ isActive}) => isActive ? styles.linkActive : undefined} to='/'>Home</NavLink>
        <NavLink className={({ isActive}) => isActive ? styles.linkActive : undefined} to='/favorite'>Favorite</NavLink>
        <NavLink className={({ isActive}) => isActive ? styles.linkActive : undefined} to='/about'>About</NavLink>
      </Container>
    </nav>
  );
}

export default NavBar;