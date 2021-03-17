import Link from 'next/link';
import Navigation from './Navigation';

// import styles from './Header.module.scss';

export default function Header() {
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                                <img
                                    className="h-8 sm:h-12 w-auto"
                                    src="https://bpj.org.uk/download-logo/bpj-logo-alt.svg"
                                    alt="Black Pear Joggers Logo"
                                />
                            </Link>
                        </div>

                        <div className="hidden sm:flex sm:ml-6 items-center">
                            <ul className="flex xl:space-x-4">
                                <li>
                                    <a
                                        className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                        href="/membership">
                                        Membership
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                        href="#">
                                        Club info
                                    </a>
                                    <ul className="hidden">
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/when-we-run/">
                                                When We Run
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/the-history-of-black-pear-joggers/">
                                                Our History
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/meet-the-joggers/">
                                                Meet the Joggers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/kit/">
                                                Kit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/charity/">
                                                Charity
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/mental-health-and-wellbeing/">
                                                Mental Health and Wellbeing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/london-marathon-club-ballot/">
                                                London Ballot Places
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/leading-a-group/">
                                                Leading a Group
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/social-events/">
                                                Social Events
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                        href="#">
                                        Racing/leagues
                                    </a>
                                    <ul className="hidden">
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://black-pear-joggers.netlify.com/apps/club-standards/">
                                                Club Standards Awards
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/leagues/cross-country/">
                                                Cross Country
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://black-pear-joggers.netlify.com/apps/magic-mile/">
                                                Magic Mile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/leagues/parkrun-tours/">
                                                parkrun tours
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://black-pear-joggers.netlify.com/apps/club-records/">
                                                Club Records
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://black-pear-joggers.netlify.com/apps/race-results/">
                                                Race Results
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                        href="/our-races">
                                        Our races
                                    </a>
                                    <ul className="hidden">
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/our-races/croome-race/">
                                                Croome Capability Canter
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/our-races/wild-race/">
                                                The Wild One
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/the-virtual-wild-one/">
                                                The Virtual One
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                        href="https://bpj.org.uk/news/">
                                        News
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                        href="#">
                                        Contact
                                    </a>
                                    <ul className="hidden">
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.org.uk/contact-the-club/">
                                                Contact the Club
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://www.facebook.com/groups/blackpearjoggers/">
                                                Facebook Community
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-bold no-underline"
                                                href="https://bpj.typeform.com/to/pIodcN">
                                                Incident Report Form
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md font-medium">
                                    Membership
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
                                    Team
                                </a> */}
                        </div>
                    </div>
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>

                        <div className="ml-3 relative">
                            <div>
                                <button
                                    type="button"
                                    className="bg-gray-800 flex rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="user-menu"
                                    aria-expanded="false"
                                    aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">
                                    Your Profile
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">
                                    Settings
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Team
                    </a>
                    <a
                        href="#"
                        className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Projects
                    </a>
                    <a
                        href="#"
                        className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Calendar
                    </a>
                </div>
            </div>
        </nav>
    );
}
