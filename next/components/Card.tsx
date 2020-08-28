import styles from './Card.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Alignment } from '../models/alignment.model';
import { classNames } from '../core/helpers';

export default function Card(props: {
    imageUrl?: string;
    headline?: string;
    content?: string | ReactNode;
    link: string;
    alignment?: Alignment;
}) {
    const image = <img className={styles.image} src={props.imageUrl} alt={props.imageUrl} />;

    return (
        <div className={classNames(styles.card, props.alignment === 'left' && 'u-text-left')}>
            {props.imageUrl && (
                <div className={styles.cta}>
                    {props.link ? (
                        <Link href={props.link}>
                            <a>{image}</a>
                        </Link>
                    ) : (
                        image
                    )}
                </div>
            )}
            <div className={styles.content}>
                {(props.headline || props.content) && (
                    <div className={styles.copy}>
                        {props.headline && (
                            <h3>
                                <Link href={props.link}>
                                    <a>{props.headline}</a>
                                </Link>
                            </h3>
                        )}
                        {props.content && props.content}
                    </div>
                )}
            </div>
        </div>
    );
}
