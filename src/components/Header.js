import styles from '@/styles/Header.module.css';
import A from '../UI/A.js';
import Container from '../UI/Container.js';


const Header = () => {
  return (
      <Container style={{position: "fixed", zIndex: 20, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.1)"}} className={styles.header}>
      <header className={styles.navbar}>
        <p className={styles.brand}>Gypsy Ceramics</p>
        <ul className={styles.mainNav}>
            <li><A href={'#'} color='black'>О нас</A></li>
            <li><A href={'#'} color='black'>Коллекция</A></li>
            <li><A href={'#'} color='black'>Процесс создания</A></li>
            <li><A href={'#'} color='black'>Отзывы</A></li>
            <li><A href={'#'} color='black'>Контакты</A></li>
        </ul>
      </header>
    </Container>
  );
};

export default Header;
