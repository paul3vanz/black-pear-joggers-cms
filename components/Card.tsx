import { Alignment } from '../models/alignment.model';
import LazyLoad from 'react-lazy-load';
import Link from 'next/link';
import { ReactNode } from 'react';
import { classNames } from '../core/helpers';

interface Props {
    imageUrl?: string;
    headline?: string;
    content?: string | ReactNode;
    link: string;
    alignment?: Alignment;
}

const Image = ({ src }) => (
    <div className="h-52 mb-4">
        <LazyLoad offset={100}>
            <img className="h-52 w-full rounded-md object-cover object-center" src={src} alt="" />
        </LazyLoad>
    </div>
);

// const CardCop

export const Card = (props: Props) => (
    <div className={classNames('flex flex-col p-2 w-full overflow-hidden bg-white rounded-md text-gray-900')}>
        {props.imageUrl && (
            <div>
                {props.link ? (
                    <Link href={props.link}>
                        <a aria-label={props.headline}>
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
                        <h3 className="mb-2 text-2xl underline">
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
