import Navigation from './Navigation';
import Link from 'next/link';

const Header = () => (
    <header>
        <div className="logo">
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

        <style jsx>{`
            header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
                background-color: #222;
                color: #fff;
            }

            .logo {
                margin-right: 20px;
            }

            .logo img {
                height: 60px;
            }
        `}</style>
    </header>
);

export default Header;
