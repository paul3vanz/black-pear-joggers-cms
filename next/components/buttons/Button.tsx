import Link from 'next/link';
import styles from './Button.module.scss';
import classNames from 'classnames';

export default function Button(props: { link: string; title: string; backgroundColour?: string }) {
    return (
        <Link href={props.link}>
            <a className={classNames(styles.link, props.backgroundColour === 'dark' && styles.dark)}>{props.title}</a>
        </Link>
    );
}
