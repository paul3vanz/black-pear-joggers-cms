import classNames from 'classnames';
import styles from './Container.module.scss';

export default function Container({ children }) {
    return <div className="o-site-wrap o-site-wrap--padding">{children}</div>;
}
