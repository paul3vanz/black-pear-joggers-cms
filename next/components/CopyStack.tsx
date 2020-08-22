import Container from './Container';
import Stack from './Stack';
import { PropsWithChildren } from 'react';
import styles from './CopyStack.module.scss';

export default function CopyStack(
    props: PropsWithChildren<{
        headline?: string;
        backgroundColour?: string;
        styleTags?: string[];
    }>
) {
    return (
        <section className={styles.copyStack}>
            <Stack backgroundColour={props.backgroundColour}>
                <Container>
                    <div
                        className={[
                            hasTag(props.styleTags, 'alignCenter') && 'u-text-center',
                            hasTag(props.styleTags, 'listInline') && styles.inlineList,
                        ].join(' ')}>
                        {props.headline && <h2>{props.headline}</h2>}

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
