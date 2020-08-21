import styles from './Card.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Card(props: {
    imageUrl?: string;
    headline?: string;
    content?: string | ReactNode;
    link?: string;
}) {
    return (
        <div className={styles.card}>
            {props.imageUrl && (
                <div className={styles.cta}>
                    <Link href={props.link}>
                        <a>
                            <img className={styles.image} src={props.imageUrl} alt={props.imageUrl} />
                        </a>
                    </Link>
                </div>
            )}
            <div className={styles.content}>
                {(props.headline || props.content) && (
                    <div className={styles.copy}>
                        {props.headline && <h3>{props.headline}</h3>}
                        {props.content && <p>{props.content}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}
