import { Alignment } from '../models/alignment.model';
import LazyLoad from 'react-lazy-load';
import Link from 'next/link';
import { ReactNode } from 'react';
import { classNames } from '../core/helpers';

export default function Card(props: {
    imageUrl?: string;
    headline?: string;
    content?: string | ReactNode;
    link: string;
    alignment?: Alignment;
}) {
    const image = (
        <LazyLoad>
            <img
                className="absolute top-0 w-full h-full object-cover object-center"
                src={props.imageUrl}
                alt={props.imageUrl}
            />
        </LazyLoad>
    );

    return (
        <>
            <div
                className={classNames(
                    'card h-52 sm:h-72 relative flex items-end w-full overflow-hidden bg-white rounded-md text-gray-900'
                )}>
                {props.imageUrl && (
                    <div>
                        {props.link ? (
                            <Link href={props.link}>
                                <a aria-label={props.headline}>{image}</a>
                            </Link>
                        ) : (
                            image
                        )}
                    </div>
                )}
                <div className="relative m-6 pointer-events-none">
                    {(props.headline || props.content) && (
                        <div>
                            {props.headline && (
                                <h3 className="bg-gray-900 text-white inline-block px-2 py-1 mb-2">
                                    <Link href={props.link}>
                                        <a>{props.headline}</a>
                                    </Link>
                                </h3>
                            )}
                            <div className="copy fade">{props.content && props.content}</div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx global>{`
                .card .copy {
                    line-height: 36px;
                    font-size: 20px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .card img {
                    transition: transform 0.4s ease-in-out;
                }

                .card:hover img {
                    transform: scale3d(1.02, 1.02, 1.02);
                }

                .card .copy a {
                    white-space: nowrap;
                }

                .card .copy p {
                    display: inline;
                    box-decoration-break: clone;
                    -webkit-box-decoration-break: clone;
                    background-color: #fff;
                    color: #222;
                    padding: 0 10px;
                }
            `}</style>
        </>
    );
}
