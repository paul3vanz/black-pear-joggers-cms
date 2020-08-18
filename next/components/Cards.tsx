import styles from './Cards.module.scss';

export default function Cards(props) {
    return <div className={styles.cards}>{props.children}</div>;
}
