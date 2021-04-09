import { NavigationLinkItem, navigationLinks } from '../core/constants/navigation';
import { useEffect, useState } from 'react';

import Link from 'next/link';

const NavigationLink = (props: { link: string; text: string }) => (
    <a
        className="text-gray-100 transition-all hover:bg-gray-700 hover:text-white px-3 py-2 rounded-sm font-bold no-underline"
        href={props.link}>
        {props.text}
    </a>
);

const SubmenuNavigationLink = (props: { link: string; text: string }) => (
    <a
        className="text-gray-100 transition-all hover:text-white py-1 px-3 block font-bold no-underline hover:bg-gray-700"
        href={props.link}>
        {props.text}
    </a>
);

const NavigationItem = (props: { item: NavigationLinkItem }) => {
    const [active, setActive] = useState(false);

    const handleClick = (e: MouseEvent) => {
        setActive(false);
    };

    useEffect(() => {
        if (!active) {
            return;
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick, active]);

    return (
        <li className="relative" onClick={() => setActive(!active)}>
            <NavigationLink link={props.item.link} text={props.item.text} />

            {props.item.items && active && (
                <ul className="bg-gray-900 rounded-sm absolute z-30 w-64 top-8 py-2">
                    {props.item.items.map((item, index) => (
                        <li key={index}>
                            <SubmenuNavigationLink link={item.link} text={item.text} />
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export const Header = () => (
    <nav className="bg-gray-900">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-sm text-gray-400 hover:text-white transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false">
                        <span className="sr-only">Open main menu</span>

                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>

                        <svg
                            className="hidden h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <a>
                                <img
                                    className="h-8 sm:h-12 w-auto"
                                    src="https://bpj.org.uk/download-logo/bpj-logo-alt.svg"
                                    alt="Black Pear Joggers Logo"
                                    width="190"
                                    height="54"
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="hidden sm:flex sm:ml-6 items-center">
                        <ul className="flex xl:space-x-4">
                            {navigationLinks.map((item, index) => (
                                <NavigationItem key={index} item={item}></NavigationItem>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="hidden sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-sm text-base font-medium">
                    Dashboard
                </a>
                <a
                    href="#"
                    className="text-gray-100 transition-all hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-sm text-base font-medium">
                    Team
                </a>
                <a
                    href="#"
                    className="text-gray-100 transition-all hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-sm text-base font-medium">
                    Projects
                </a>
                <a
                    href="#"
                    className="text-gray-100 transition-all hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-sm text-base font-medium">
                    Calendar
                </a>
            </div>
        </div>
    </nav>
);
