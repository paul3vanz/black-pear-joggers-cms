import styles from './Card.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Card(props: Props) {
    return (
        <div className={styles.card}>
            {props.imageUrl && <img className={styles.image} src={props.imageUrl} alt={props.imageUrl} />}
            <div className={styles.content}>
                {(props.headline || props.content) && (
                    <div className={styles.copy}>
                        {props.headline && <h3>{props.headline}</h3>}
                        {props.content && <p>{props.content}</p>}
                    </div>
                )}
                {props.cta && (
                    <div className={styles.cta}>
                        <Link href={props.cta.link}>
                            <a className={styles.button}>{props.cta.title}</a>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

interface Props {
    imageUrl?: string;
    headline?: string;
    content?: string | ReactNode;
    cta?: {
        title: string;
        link: string;
    };
}
