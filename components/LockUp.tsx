import LazyLoad from 'react-lazy-load';
import { ReactNode } from 'react';
import classNames from 'classnames';

export default function LockUp(props: { image: string; content: string | ReactNode; reverse?: boolean }) {
    return (
        <div
            className={classNames(
                'flex flex-col sm:flex-row items-center -mx-4',
                props.reverse ? 'sm:flex-row-reverse' : ''
            )}>
            {props.reverse}
            <div className="flex-1 h-56 xs:h-72 sm:h-96">
                <LazyLoad>
                    <img
                        className="mb-4 sm:mb-0 w-full h-56 xs:h-72 sm:h-96 object-cover object-center rounded-md"
                        src={props.image}
                        alt=""
                    />
                </LazyLoad>
            </div>
            <div className="flex-1">
                <div className="sm:mx-4 lg:mx-24">{props.content}</div>
            </div>
        </div>
    );
}
