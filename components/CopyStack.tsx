import Container from './Container';
import { PropsWithChildren } from 'react';
import Stack from './Stack';
import { classNames } from '../core/helpers';

export default function CopyStack(
    props: PropsWithChildren<{
        headline?: string;
        backgroundColour?: string;
        styleTags?: string[];
    }>
) {
    return (
        <section className="{styles.copyStack}">
            <Stack backgroundColour={props.backgroundColour}>
                <Container>
                    <div
                        className={classNames(
                            hasTag(props.styleTags, 'alignCenter') && 'u-text-center',
                            hasTag(props.styleTags, 'listInline') && 'styles.inlineList'
                        )}>
                        {props.headline && <h2 className="h2">{props.headline}</h2>}

                        {props.children}
                    </div>
                </Container>
            </Stack>
        </section>
    );
}

function hasTag(tags: string[], tag: string): boolean {
    return tags?.some((currentTag) => currentTag === tag);
}
