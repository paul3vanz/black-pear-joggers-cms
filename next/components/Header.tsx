import Navigation from './Navigation';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <img
                        src="https://bpj.org.uk/download-logo/bpj-logo-alt.svg"
                        alt="Black Pear Joggers Logo"
                    />
                </a>
            </Link>
        </div>

        <Navigation></Navigation>

        <style jsx>{``}</style>
    </header>
);

export default Header;
