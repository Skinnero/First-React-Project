import styles from './Home.module.scss';
import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import Lists from "../Lists/Lists";

const Home = () => {
  return(
      <Container>
        <Hero/>
        <Lists/>
      </Container>
  );
}

export default Home;