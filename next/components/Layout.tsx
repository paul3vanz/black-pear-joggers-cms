import Head from 'next/head';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <link rel="icon" href="favicon.ico" type="image/x-icon" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap" />
            </Head>

            <div className="container">
                <Header></Header>

                <main>{children}</main>
            </div>

            <Footer></Footer>

            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                html {
                    -webkit-font-smoothing: antialiased;
                    font-family: Open Sans, sans-serif;
                    font-size: 14px;
                    line-height: 1.5;
                }

                body {
                    margin: 0;
                    font-size: 1rem;
                    color: #222;
                }

                .layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .container {
                    flex: 1;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    margin: 0 0 1rem 0;
                    padding: 0;
                }

                a {
                    color: #222;
                    font-weight: 700;
                }
            `}</style>
        </div>
    );
}
