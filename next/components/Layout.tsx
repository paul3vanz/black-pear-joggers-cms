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
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;800&amp;display=swap"
                />
                <script src="https://kit.fontawesome.com/97736414dd.js" crossOrigin="anonymous"></script>
            </Head>

            <div className="container">
                <Header></Header>

                <main>{children}</main>
            </div>

            <img src="https://bpj.org.uk/wp-content/uploads/2012/03/montage-2017.jpg" alt="" />

            <Footer></Footer>

            <style jsx global>{`
                .layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .container {
                    flex: 1;
                }
            `}</style>
        </div>
    );
}
