import { classNames, hasTag } from '../core/helpers';

import { Container } from './Container';
import { PropsWithChildren } from 'react';
import { Stack } from './Stack';

export const CopyStack = (
    props: PropsWithChildren<{
        headline?: string;
        backgroundColour?: string;
        styleTags?: string[];
    }>
) => (
    <Stack backgroundColour={props.backgroundColour}>
        <Container>
            <div
                className={classNames(
                    hasTag(props.styleTags, 'alignCenter') && 'text-center',
                    hasTag(props.styleTags, 'listInline') && 'styles.inlineList'
                )}>
                {props.headline && <h2 className="h2">{props.headline}</h2>}

                {props.children}
            </div>
        </Container>
    </Stack>
);
