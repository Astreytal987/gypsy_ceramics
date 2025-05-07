'use client';
import styles from '@/styles/Header.module.css';
import A from '../UI/A.js';
import { useState, useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const header = document.querySelector('header');
      let isScrolled = false;

      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop >= 2 && !isScrolled) {
          header.classList.add('white-header');
          isScrolled = true;
        } else if (scrollTop < 2 && isScrolled) {
          header.classList.remove('white-header');
          isScrolled = false;
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const HandleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <p className={styles.brand}>Gypsy Ceramics</p>
      <ul className={`${styles.mainNav} ${isOpen ? 'mainNavLowResActive' : ''}`}>
        <li>
          <A href={'#about'} color="#222222">
            О нас
          </A>
        </li>
        <li>
          <A href={'#collection'} color="#222222">
            Коллекция
          </A>
        </li>
        <li>
          <A href={'#process'} color="#222222">
            Процесс создания
          </A>
        </li>
        <li>
          <A href={'#contact'} color="#222222">
            Контакты
          </A>
        </li>
        <li className={styles.NavContact}>
          <A color="rgba(194, 170, 60, 1)" className={'NavContact'} href={'#'}>
            Instagram
          </A>
        </li>
        <li className={styles.NavContact}>
          <A color="rgba(194, 170, 60, 1)" className={'NavContact'} href={'#'}>
            Telegram
          </A>
        </li>
        <li className={styles.NavContact}>
          <A color="rgba(194, 170, 60, 1)" className={'NavContact'} href={'#'}>
            WhatsApp
          </A>
        </li>
      </ul>
      {isOpen ? (
        <svg
          onClick={HandleOpenMenu}
          className={styles.menubutton}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M31 1L1 31M1 1L31 31" stroke="#222222" />
        </svg>
      ) : (
        <svg
          onClick={HandleOpenMenu}
          className={styles.menubutton}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4H30" stroke="#222222" />
          <path d="M0 15H30" stroke="#222222" />
          <path d="M0 26H30" stroke="#222222" />
        </svg>
      )}
    </header>
  );
};

export default Header;
