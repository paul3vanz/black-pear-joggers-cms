import styles from './Stack.module.scss';
import { PropsWithChildren } from 'react';

const Stack = (props: PropsWithChildren<Props>) => (
    <section
        className={[
            styles.stack,
            props.backgroundColour ? styles[props.backgroundColour] : null,
            props.padding ? styles[`padding-${props.padding}`] : null,
        ].join(' ')}>
        {props.backgroundImage && (
            <div className={styles.image}>
                <img src={props.backgroundImage} />
            </div>
        )}
        <div className={styles.content}>{props.children}</div>
    </section>
);

interface Props {
    backgroundColour?: string;
    backgroundImage?: string;
    children: any;
    heading?: string;
    padding?: string;
}

export default Stack;
