import styles from '@/styles/Contact.module.css';
import A from '../UI/A.js';
import Container from '../UI/Container.js';

const Contact = () => {
  return (
    <Container className="container">
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
