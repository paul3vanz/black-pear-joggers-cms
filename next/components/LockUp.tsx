import classNames from 'classnames';
import styles from './LockUp.module.scss';

export default function LockUp({ image, content }) {
    return (
        <div className={styles.lockUp}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.content}>{content}</div>
        </div>
    );
}
