export default function Cards({ children }) {
    return <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">{children}</div>;
}
