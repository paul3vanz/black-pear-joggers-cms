import Button from './buttons/Button';
// import styles from './Hero.module.scss';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Hero(props: { heading: string; copy: string | ReactNode; link: string; linkTitle: string }) {
    return (
        <>
            <div className="hero">
                <div className="text-center">
                    <h1 className="mb-4 bg-gray-900 inline-block px-4 py-2 mx-auto">{props.heading}</h1>

                    <div className="sm:w-2/3 lg:w-1/2 mx-auto">
                        <div className="copy mb-8">{props.copy}</div>
                    </div>

                    <div className="text-gray-900">
                        <Button link={props.link} title={props.linkTitle} backgroundColour="dark" />
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .hero .copy p {
                    display: inline;
                    box-decoration-break: clone;
                    -webkit-box-decoration-break: clone;
                    background-color: #fff;
                    color: #222;
                    padding: 0 8px;
                }
            `}</style>
        </>
    );
}
