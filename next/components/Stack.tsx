const Stack = ({ children, visualStyle }: Props) => (
    <section>
        {children}

        <style jsx>{`
            section {
                padding: 2rem 0;
                background-color: ${visualStyle === 'Emphasized' && '#f89829'};
            }
        `}</style>
    </section>
);

interface Props {
    children: any;
    visualStyle?: string;
}

export default Stack;
