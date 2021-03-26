import Announcement from './Announcement';
import { Favicon } from './Favicon';
import { Footer } from './Footer';
import Head from 'next/head';
import { Header } from './Header';
import { LazyLoadImage } from './LazyLoadImage';
import { PropsWithChildren } from 'react';

export const Layout = (props: PropsWithChildren<{}>) => (
    <div className="flex flex-col">
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;800&amp;display=swap"
            />

            <script src="https://kit.fontawesome.com/97736414dd.js" crossOrigin="anonymous"></script>

            <Favicon />
        </Head>

        <a href="#content" className="sr-only focus:not-sr-only underline">
            Skip to content
        </a>

        <Announcement />

        <Header></Header>

        <div className="flex-full" id="content">
            <main>{props.children}</main>
        </div>

        <LazyLoadImage className="h-48 sm:h-52 md:h-72">
            <img
                src="https://bpj.org.uk/wp-content/uploads/2012/03/montage-2017.jpg"
                alt=""
                className="w-full object-cover h-48 sm:h-52 md:h-72"
            />
        </LazyLoadImage>

        <Footer></Footer>
    </div>
);
