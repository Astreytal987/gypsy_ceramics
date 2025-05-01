import styles from '@/styles/CreationProcess.module.css';
import Container from '../UI/Container.js';

const CreationProcess = () => {
  return (
    <Container className={'container' + ' ' + 'containerInnerCollection'}>
      <h2 id="process" className={styles.title}>
        Процесс <br className={styles.BrActive} /> создания
      </h2>
      <div className={styles.gridBox}>
        <div className={styles.Collection}>
          <div className={styles.gridTextBox}>
            <h3 className={styles.titlegrid}>Создание коллекции</h3>
            <p>
              После нескольких лет экспериментов с формами, цветами и техниками обжига была создана
              первая коллекция «Freakcircus». В ней были представлены как традиционные элементы —
              такие как яркие узоры и асимметричные формы, так и современные интерпретации. Каждое
              изделие стало носителем истории: от чаш до вазы — все они были созданы с любовью
              и уважением к культуре, людям с психическими и физиологическими особенностями и идее
              красоты в несовершенстве природы и мира, в целом.
            </p>
          </div>
        </div>
        <div className={styles.Gift}>
          <div className={styles.gridTextBox}>
            <h3 className={styles.titlegrid}> Подарок наслаждения</h3>
            <p>
              Бренд GYPSY CERAMICS позиционируется, как подарок для истинных ценителей искусства.
              Каждое изделие — это не просто предмет, это возможность прикоснуться к вечности. Бренд
              стремится донести до своих покупателей идею о том, что каждая вещь может быть
              источником вдохновения и радости.
            </p>
          </div>
        </div>
        <div className={styles.Brend}>
          <p className={styles.gridTextBox}>
            GYPSY CERAMICS стал символом соединения традиций и современности. Он предлагает
            уникальные изделия для тех, кто ценит искусство в его самых разных проявлениях.
            Это не просто бизнес, это миссия по сохранению культурного наследия и передаче
            его будущим поколениям через красоту керамики.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CreationProcess;
