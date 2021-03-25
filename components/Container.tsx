export default function Container({ children }) {
    return (
        <div className="container mx-auto">
            <div className="mx-4">{children}</div>
        </div>
    );
}
