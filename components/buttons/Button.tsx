import Link from 'next/link';
import classNames from 'classnames';

export default function Button(props: { link: string; title: string; backgroundColour?: string }) {
    return (
        <>
            <Link href={props.link}>
                <a className={classNames('link', props.backgroundColour === 'dark' && 'dark')}>{props.title}</a>
            </Link>

            <style jsx>{`
                .link {
                    display: inline-block;
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    transition: all 0.3s ease;
                    border: 2px solid #222;
                    border-radius: 3px;
                    font-size: 1.25rem;
                }

                .link:hover,
                .link:focus {
                    background-color: rgba(10, 10, 10, 0.9);
                    color: #fff;
                }

                .dark {
                    border-color: #fff;
                    color: #fff;
                }

                .dark:hover,
                .dark:focus {
                    background-color: rgba(255, 255, 255, 0.9);
                    color: #222;
                }
            `}</style>
        </>
    );
}
