import Link from 'next/link';
import styles from './Button.module.scss';

export default function Button(props: { link: string; title: string }) {
    return (
        <Link href={props.link}>
            <a className={styles.link}>{props.title}</a>
        </Link>
    );
}
