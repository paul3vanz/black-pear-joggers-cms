import { PropsWithChildren, useState } from 'react';

import LazyLoad from 'react-lazy-load';
import { classNames } from '../core/helpers';

export const LazyLoadImage = (props: PropsWithChildren<{ rounded?: boolean; className?: string }>) => {
    const [loading, setLoading] = useState(true);

    return (
        <div
            className={classNames(
                'bg-gray-100',
                props.className,
                props.rounded && 'rounded-sm',
                loading && 'animate-pulse'
            )}>
            <LazyLoad offset={100} onContentVisible={() => setLoading(false)}>
                {props.children}
            </LazyLoad>
        </div>
    );
};
