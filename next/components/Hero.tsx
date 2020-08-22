import styles from './Hero.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Hero(props: { heading: string; copy: string | ReactNode; link: string; linkTitle: string }) {
    return (
        <div className="u-text-center">
            <div className={styles.hero}>
                <h1>{props.heading}</h1>

                <div className="o-grid">
                    <div className="o-grid__item u-2/3@sm u-1/2@lg">
                        <div className={styles.copy}>{props.copy}</div>
                    </div>
                </div>

                <Link href={props.link}>
                    <a className={styles.link}>{props.linkTitle}</a>
                </Link>
            </div>
        </div>
    );
}
