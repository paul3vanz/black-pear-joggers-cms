import classNames from 'classnames';
// import styles from './Container.module.scss';

export default function Container({ children }) {
    return <div className="container mx-auto">{children}</div>;
}
