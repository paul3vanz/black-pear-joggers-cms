import styles from './Stack.module.scss';

const Stack = ({ children, visualStyle }: Props) => (
    <section
        className={[styles.stack, styles[visualStyle?.toLowerCase()]].join(
            ' '
        )}>
        {children}
    </section>
);

interface Props {
    children: any;
    visualStyle?: string;
}

export default Stack;
