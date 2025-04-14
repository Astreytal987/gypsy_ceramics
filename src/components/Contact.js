import styles from '@/styles/Contact.module.css';
import A from '../UI/A.js';
import Container from '../UI/Container.js';
import Image from "next/image";

const Contact = () => {
    const blabla = "История бренда GYPSY CERAMICS начинается с воспоминаний о детстве, когда основательница, вдохновлённая яркими и насыщенными цветами цыганских костюмов, страстной любви и свободного духа этого народа, впервые увидела табор и отправилась жить с ними на лесной опушке в детстве на несколько незабываемых дней. Громкие песни и танцы с яркими искрами у палящего вечернего костра разожгли огонь в маленьком сердце и пылающих детских глазах. Они рассказывали истории о свободе, страсти и культуре цыганского народа. Вдохновение пришло от мамы, которая часто делилась в детстве сказками о жизни цыган, их культуре и искусстве"
    const blabla2 = "В процессе работы над концепцией бренда возникла идея создать коллекцию, которая бы отражала дух свободы и страсти. Каждое изделие должно было быть не просто предметом интерьера, а настоящим произведением искусства, способным передать эмоции и атмосферу цыганской культуры. Так родился Freak circus."
  return (
    <Container padding={180}>
        <div className={styles.contactBlock}>
           <h2 className={styles.contactsText}>Наши социальные сети</h2>
           <div className={styles.contacts}>
                <A className={styles.contact} href="#">Instagram*</A>
                <A className={styles.contact} href="#">Telegram</A>
                <A className={styles.contact} href="#">WhatsApp</A>
           </div>
        </div>
    </Container>
  );
};

export default Contact;
