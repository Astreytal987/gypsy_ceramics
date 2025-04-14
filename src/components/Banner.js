import styles from '@/styles/Banner.module.css';
import A from '../UI/A.js';
import Container from '../UI/Container.js';
import Image from "next/image";


const Banner = () => {
  return (
    <section className={styles.banner}>
        <Image
            src="/Banner.png"
            alt="Описание изображения"
            layout="fill"
            quality={100}
            className={styles.BannerImg}
        />
        <Container>
            <div className={styles.slogan}>
                <h1>Уникальная керамика для вашего вдохновения</h1>
                <h2>Современное искусство и керамика ручной работы</h2>
            </div>
            <div className={styles.buttonCenter}>
                <button className={styles.button}>Смотреть изделия</button>
            </div>
        </Container>
    </section>
  );
};

export default Banner;