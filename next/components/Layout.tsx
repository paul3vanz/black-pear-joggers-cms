import Head from 'next/head';
import Navigation from './Navigation';
import Header from './Header';

const Layout = (props) => (
    <div className="layout">
        <Head>
            <link rel="icon" type="image/x-icon" href="favicon.ico" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
            <link
                href="https://fonts.gstatic.com"
                rel="preconnect"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap"
                rel="stylesheet"
            />
        </Head>

        <Header></Header>

        {props.children}

        <style jsx global>{`
            * {
                box-sizing: border-box;
            }

            html {
                -webkit-font-smoothing: antialiased;
                font-family: Open Sans, sans-serif;
                font-size: 90%;
                line-height: 1.5;
            }

            body {
                margin: 0;
                font-size: 0.9rem;
                color: #222;
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
                color: #f89829;
                font-weight: 700;
            }
        `}</style>
    </div>
);

export default Layout;
