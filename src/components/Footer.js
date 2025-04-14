import styles from '@/styles/Footer.module.css';
import A from '../UI/A.js';
import Container from '../UI/Container.js';


const Header = () => {
  return (
    <Container padding={180}  style={{width: "100%", backgroundColor: "rgba(208, 210, 219, 1)"}}>
      <footer className={styles.navbar}>
        <div className={styles.headerUp}>
            <p className={styles.brand}>Gypsy Ceramics</p>
            <ul className={styles.mainNav}>
                <li><A href={'#'} color='rgba(48, 48, 51, 1)'>О нас</A></li>
                <li><A href={'#'} color='rgba(48, 48, 51, 1)'>Коллекция</A></li>
                <li><A href={'#'} color='rgba(48, 48, 51, 1)'>Процесс создания</A></li>
                <li><A href={'#'} color='rgba(48, 48, 51, 1)'>Отзывы</A></li>
                <li><A href={'#'} color='rgba(48, 48, 51, 1)'>Контакты</A></li>
            </ul>
            <p className={styles.back}>Назад</p>
        </div>
        <div className={styles.headerDown}>* Instagram (принадлежит компании Meta, признанной экстремистской и запрещённой на территории РФ)</div>
      </footer>
    </Container>
  );
};

export default Header;
