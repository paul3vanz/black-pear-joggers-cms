import { classNames, hasTag } from '../core/helpers';

import { PropsWithChildren } from 'react';

interface CopyProps {
    headline?: string;
    styleTags?: string[];
}

export const Copy = (props: PropsWithChildren<CopyProps>) => (
    <div
        className={classNames(
            'max-w-3xl mx-auto',
            hasTag(props.styleTags, 'alignCenter') && 'text-center',
            hasTag(props.styleTags, 'listInline') && 'styles.inlineList'
        )}>
        {props.headline && <h2 className="h2">{props.headline}</h2>}

        {props.children}
    </div>
);
