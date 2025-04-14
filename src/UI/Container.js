import styles from '@/styles/Container.module.css';

export default function ({children, padding = 60, style}) {
    return (
        <div style={{ padding: `0px ${padding}px`, ...style}} className={styles.container}>
            {children}
        </div>
    )    
}

// color, lowerStrip, LeftStar