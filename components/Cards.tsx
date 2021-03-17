// import styles from './Cards.module.scss';

export default function Cards({ children }) {
    return <div className="flex flex-col sm:flex-row -my-4 sm:-my-0 sm:-mx-4">{children}</div>;
}
