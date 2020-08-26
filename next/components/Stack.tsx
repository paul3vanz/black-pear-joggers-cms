import styles from './Stack.module.scss';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

const Stack = (props: PropsWithChildren<Props>) => (
    <section
        className={classNames(
            'o-section-lg',
            props.padding === 'larger' && 'o-section-xl',
            props.backgroundColour && `u-bg--${props.backgroundColour}`
        )}>
        {props.backgroundImage && (
            <div className={styles.image}>
                <img src={props.backgroundImage} alt="" />
            </div>
        )}
        <div className={styles.content}>
            {props.heading && (
                <div className="o-site-wrap o-site-wrap--padding">
                    <h2>{props.heading}</h2>
                </div>
            )}

            {props.children}
        </div>
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
