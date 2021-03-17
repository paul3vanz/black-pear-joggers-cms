import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';
import LazyLoad from 'react-lazy-load';
import Navigation from './Navigation';

export default function Layout({ children }) {
    return (
        <div className="flex flex-col">
            <Head>
                <link rel="icon" href="favicon.ico" type="image/x-icon" />

                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;800&amp;display=swap"
                />

                <script src="https://kit.fontawesome.com/97736414dd.js" crossOrigin="anonymous"></script>
            </Head>

            <Header></Header>

            <div className="flex-full">
                <main>{children}</main>
            </div>

            <LazyLoad>
                <img
                    src="https://bpj.org.uk/wp-content/uploads/2012/03/montage-2017.jpg"
                    alt=""
                    className="w-full object-cover image"
                />
            </LazyLoad>

            <Footer></Footer>

            <style jsx>{`
                .image {
                    min-height: 200px;
                }
            `}</style>
        </div>
    );
}