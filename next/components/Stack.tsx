const Stack = ({ children, visualStyle }) => (
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

export default Stack;
