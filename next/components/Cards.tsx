import styles from './Cards.module.scss';

export default function Cards({ children }) {
    return <div className={styles.cards}>{children}</div>;
}
