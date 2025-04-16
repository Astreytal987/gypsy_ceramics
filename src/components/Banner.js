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
        <div className={styles.containerSlogan}>
            <div className={styles.slogan}>
                <h1>Уникальная керамика <br /> для вашего <br className={styles.BrActive}/>  вдохновения</h1>
                <h2>Современное искусство <br className={styles.BrActive}/> и керамика <br /> ручной работы</h2>
            </div>
            <div className={styles.buttonCenter}>
                <button className={styles.button}>Смотреть изделия</button>
            </div>
        </div>
    </section>
  );
};

export default Banner;