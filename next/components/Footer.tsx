import Link from 'next/link';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.links}>
                <li>
                    <a href="https://bpj.org.uk/club-constitution/">
                        Club Constitution
                    </a>
                </li>
                <li>
                    <a href="https://bpj.org.uk/health-and-safety-policy-and-risk-assessment/">
                        Health and Safety Policy
                    </a>
                </li>
                <li>
                    <a href="https://bpj.org.uk/privacy-policy/">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="https://bpj.org.uk/terms-of-use/">Terms of Use</a>
                </li>
                <li>
                    <Link href="/site-map/">
                        <a>Site map</a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
