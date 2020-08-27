import Link from 'next/link';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.links}>
                <li>
                    <Link href="/club-constitution">
                        <a>Club constitution</a>
                    </Link>
                </li>
                <li>
                    <Link href="/health-and-safety-policy">
                        <a>Health and safety policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/privacy-policy">
                        <a>Privacy policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/terms-of-use">
                        <a>Terms of use</a>
                    </Link>
                </li>
                <li>
                    <Link href="/site-map">
                        <a>Site map</a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
