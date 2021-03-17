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
            <img className="w-full h-32 sm:h-48 object-cover object-center" src={props.imageUrl} alt={props.imageUrl} />
        </LazyLoad>
    );

    return (
        <div
            className={classNames(
                'flex-1 my-2 sm:mx-4 bg-white rounded-md overflow-hidden text-gray-900 text-center',
                props.alignment === 'left' && 'text-left'
            )}>
            {props.imageUrl && (
                <div className="mb-4">
                    {props.link ? (
                        <Link href={props.link}>
                            <a aria-label={props.headline}>{image}</a>
                        </Link>
                    ) : (
                        image
                    )}
                </div>
            )}
            <div className="m-4">
                {(props.headline || props.content) && (
                    <div>
                        {props.headline && (
                            <h3 className="bg-gray-900 text-white inline-block px-3 py-1">
                                <Link href={props.link}>
                                    <a>{props.headline}</a>
                                </Link>
                            </h3>
                        )}
                        {props.content && props.content}
                    </div>
                )}
            </div>
        </div>
    );
}
