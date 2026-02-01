import styles from './NavBar.module.scss';
import Container from "../Container/Container";


const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <a href='/'><i className="fa fa-tasks"></i></a>
      </Container>
      <Container>
        <a href='/'>Home</a>
        <a href='/favorite'>Favorite</a>
        <a href='/about'>About</a>
      </Container>
    </nav>
  );
}

export default NavBar;