const Container = ({ children }) => (
    <div className="container">
        {children}

        <style jsx>{`
            .container {
                margin: 0 auto;
                max-width: 72rem;
                padding: 0 1rem;
            }
        `}</style>
    </div>
);

export default Container;
