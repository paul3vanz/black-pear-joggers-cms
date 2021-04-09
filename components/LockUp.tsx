import { Image } from '../core/models/image.model';
import { LazyLoadImage } from './LazyLoadImage';
import { ReactNode } from 'react';
import classNames from 'classnames';

export default function LockUp(props: {
    image: string;
    imageResponsive?: Image;
    content: string | ReactNode;
    reverse?: boolean;
}) {
    return (
        <div
            className={classNames(
                'flex flex-col md:flex-row items-center',
                props.reverse ? 'md:flex-row-reverse' : ''
            )}>
            {props.reverse}

            <LazyLoadImage rounded={true} className="md:flex-1 h-56 xs:h-64 sm:h-96 mb-12 md:mb-0">
                {props.imageResponsive ? (
                    <img
                        className="w-full h-56 xs:h-64 sm:h-96 object-cover object-center rounded-sm"
                        src={props.imageResponsive.large}
                        srcSet={getSrcSet(props.imageResponsive)}
                        sizes={getSizes()}
                        alt=""
                    />
                ) : (
                    <img
                        className="w-full h-56 xs:h-64 sm:h-96 object-cover object-center rounded-sm"
                        src={props.image}
                        alt=""
                    />
                )}
            </LazyLoadImage>

            <div className="flex-1">
                <div className="md:mx-8 lg:mx-12 xl:mx-24">{props.content}</div>
            </div>
        </div>
    );
}

function getSrcSet(image: Image): string {
    return `
        ${image.large} 1500w,
        ${image.medium} 750w,
        ${image.small} 438w
    `;
}

function getSizes(): string {
    return `
        (min-width: 800px) 1500w,
        (min-width: 640px) 750w,
        438w
    `;
}
