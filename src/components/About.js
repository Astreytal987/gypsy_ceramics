import styles from '@/styles/About.module.css';
import A from '../UI/A.js';
import Container from '../UI/Container.js';
import Image from "next/image";

const About = () => {
    const blabla = "История бренда GYPSY CERAMICS начинается с воспоминаний о детстве, когда основательница, вдохновлённая яркими и насыщенными цветами цыганских костюмов, страстной любви и свободного духа этого народа, впервые увидела табор и отправилась жить с ними на лесной опушке в детстве на несколько незабываемых дней. Громкие песни и танцы с яркими искрами у палящего вечернего костра разожгли огонь в маленьком сердце и пылающих детских глазах. Они рассказывали истории о свободе, страсти и культуре цыганского народа. Вдохновение пришло от мамы, которая часто делилась в детстве сказками о жизни цыган, их культуре и искусстве"
    const blabla2 = "В процессе работы над концепцией бренда возникла идея создать коллекцию, которая бы отражала дух свободы и страсти. Каждое изделие должно было быть не просто предметом интерьера, а настоящим произведением искусства, способным передать эмоции и атмосферу цыганской культуры. Так родился Freak circus."
  return (
    <Container className="container">
        <h2 className={styles.AboutTitle + " " + "containerInner"}>О нас</h2>
        <div class={styles.parent}>
            <div class={styles.imgLeft}>
                <Image
                src="/leftTable.png"
                alt="Описание изображения"
                layout="intrinsic"
                objectFit="cover"
                width={770} 
                height={574}
                quality={100}
                loading = "eager"
                />
            </div>
            <div class={styles.textRight}>
                <h2 className={styles.textRightTitle + " " + "containerInner"}>Наша история</h2>
                <p className={styles.textRightText + " " + "containerInner"}>{blabla}</p>
                <A href={'#'} className={styles.textRightA + " " + "containerInner"}>Узнать процесс создания</A>
            </div>
            <div class={styles.ImgRight}>
            <Image
                src="/rightBlack.png"
                alt="Описание изображения"
                layout="intrinsic"
                objectFit="cover"
                width={770} 
                height={573}
                quality={100} 
                loading = "eager"
                />
            </div>
            <div class={styles.textLeft + " " + "containerInner"}>{blabla2}</div>
        </div>
    </Container>
  );
};

export default About;
