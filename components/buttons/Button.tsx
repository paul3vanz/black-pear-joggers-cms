import Link from 'next/link';
import classNames from 'classnames';

export default function Button(props: {
    link: string;
    title: string;
    style?: string;
    backgroundColour?: string;
    size?: string;
}) {
    return (
        <>
            <Link href={props.link}>
                <a
                    className={classNames(
                        'link',
                        props.style === 'dark' && 'dark',
                        props.backgroundColour === 'dark' && 'bg-gray-900'
                    )}>
                    {props.title}
                </a>
            </Link>

            <style jsx>{`
                .link {
                    display: inline-block;
                    margin-top: 1rem;
                    transition: all 0.3s ease;
                    border: 2px solid #222;
                    border-radius: 3px;
                    padding: ${props.size === 'sm' ? '0.25rem 0.5rem' : '0.5rem 1rem'};
                    font-size: ${props.size === 'sm' ? '1.125rem' : '1.25rem'};
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
