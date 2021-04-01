import { LazyLoadImage } from './LazyLoadImage';
import { ReactNode } from 'react';
import classNames from 'classnames';

export default function LockUp(props: { image: string; content: string | ReactNode; reverse?: boolean }) {
    return (
        <div
            className={classNames(
                'flex flex-col sm:flex-row items-center',
                props.reverse ? 'sm:flex-row-reverse' : ''
            )}>
            {props.reverse}

            <LazyLoadImage rounded={true} className="sm:flex-1 h-56 xs:h-72 sm:h-96 mb-4 sm:mb-0 ">
                <img
                    className="w-full h-56 xs:h-72 sm:h-96 object-cover object-center rounded-sm"
                    src={props.image}
                    alt=""
                />
            </LazyLoadImage>

            <div className="flex-1">
                <div className="sm:mx-4 lg:mx-12 xl:mx-24 py-12 sm:py-16">{props.content}</div>
            </div>
        </div>
    );
}
