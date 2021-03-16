// import styles from './Cards.module.scss';

export default function Cards({ children }) {
    return <div className="flex flex-col sm:flex-row">{children}</div>;
}
