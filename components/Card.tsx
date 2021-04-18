import { Alignment } from '../core/models/alignment.model';
import { LazyLoadImage } from './LazyLoadImage';
import Link from 'next/link';
import { ReactNode } from 'react';
import { classNames } from '../core/helpers';

interface ImageProps {
    src: string;
    alt?: string;
}

interface CardProps {
    imageUrl?: string;
    headline?: string;
    content?: string | ReactNode;
    link: string;
    alignment?: Alignment;
}

const Image = ({ src, alt }: ImageProps) => (
    <LazyLoadImage className="h-40 sm:h-52 mb-4 rounded-sm bg-gray-100">
        <img className="h-40 sm:h-52 w-full rounded-sm object-cover object-center" src={src} alt={alt} />
    </LazyLoadImage>
);

export const Card = (props: CardProps) => (
    <div className={classNames('flex flex-col p-2 w-full overflow-hidden bg-white rounded-sm text-gray-900 shadow-xl')}>
        {props.imageUrl && (
            <div>
                {props.link ? (
                    <Link href={props.link}>
                        <a aria-label={props.headline} tabIndex={-1}>
                            <Image src={props.imageUrl} />
                        </a>
                    </Link>
                ) : (
                    <Image src={props.imageUrl} />
                )}
            </div>
        )}
        <div className="mx-4">
            {(props.headline || props.content) && (
                <>
                    {props.headline && (
                        <h3 className="mb-2 text-lg sm:text-xl underline">
                            <Link href={props.link}>
                                <a>{props.headline}</a>
                            </Link>
                        </h3>
                    )}
                    <div className="copy fade">{props.content && props.content}</div>
                </>
            )}
        </div>
    </div>
);
