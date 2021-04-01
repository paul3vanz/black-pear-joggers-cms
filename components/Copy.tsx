import { classNames, hasTag } from '../core/helpers';

import { PropsWithChildren } from 'react';

export const Copy = (
    props: PropsWithChildren<{
        headline?: string;
        styleTags?: string[];
    }>
) => (
    <div
        className={classNames(
            'max-w-3xl mx-auto',
            hasTag(props.styleTags, 'alignCenter') && 'text-center',
            hasTag(props.styleTags, 'listInline') && 'styles.inlineList'
        )}>
        {props.headline && <h2 className="h2">BLAH {props.headline}</h2>}

        {props.children}
    </div>
);
