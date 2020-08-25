import classNames from 'classnames';
import styles from './LockUp.module.scss';
import { ReactNode } from 'react';

export default function LockUp(props: { image: string; content: string | ReactNode; reverse?: boolean }) {
    return (
        <div className={classNames(styles.lockUp, props.reverse ? styles.reverse : '')}>
            {props.reverse}
            <div className={classNames(styles.item, styles.image)}>
                <img src={props.image} alt="" />
            </div>
            <div className={styles.item}>{props.content}</div>
        </div>
    );
}
