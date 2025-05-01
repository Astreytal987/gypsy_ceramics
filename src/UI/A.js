import Link from 'next/link';
import styles from '@/styles/A.module.css';

export default function ({ children, href, color = '#C2AA3C', animate, className }) {
  console.log(animate);
  return (
    <Link href={href} style={{ color }} className={`${animate ? styles.fill : ''} ${className}`}>
      {children}
    </Link>
  );
}
