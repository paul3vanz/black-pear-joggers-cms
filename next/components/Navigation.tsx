import Link from 'next/link';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link href="https://bpj.org.uk/membership/">
                    <a>Membership</a>
                </Link>
            </li>

            <li>
                <a href="#">Club Info</a>
                <ul>
                    <li>
                        <a href="https://bpj.org.uk/when-we-run/">
                            When We Run
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/the-history-of-black-pear-joggers/">
                            Our History
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/meet-the-joggers/">
                            Meet the Joggers
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/kit/">Kit</a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/charity/">Charity</a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/mental-health-and-wellbeing/">
                            Mental Health and Wellbeing
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/london-marathon-club-ballot/">
                            London Ballot Places
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/leading-a-group/">
                            Leading a Group
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/social-events/">
                            Social Events
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Racing/Leagues</a>
                <ul>
                    <li>
                        <a href="https://black-pear-joggers.netlify.com/apps/club-standards/">
                            Club Standards Awards
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/leagues/cross-country/">
                            Cross Country
                        </a>
                    </li>
                    <li>
                        <a href="https://black-pear-joggers.netlify.com/apps/magic-mile/">
                            Magic Mile
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/leagues/parkrun-tours/">
                            parkrun tours
                        </a>
                    </li>
                    <li>
                        <a href="https://black-pear-joggers.netlify.com/apps/club-records/">
                            Club Records
                        </a>
                    </li>
                    <li>
                        <a href="https://black-pear-joggers.netlify.com/apps/race-results/">
                            Race Results
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="https://bpj.org.uk/our-races/">Our Races</a>
                <ul>
                    <li>
                        <a href="https://bpj.org.uk/our-races/croome-race/">
                            Croome Capability Canter
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/our-races/wild-race/">
                            The Wild One
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.org.uk/the-virtual-wild-one/">
                            The Virtual One
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="https://bpj.org.uk/news/">News</a>
            </li>
            <li>
                <a href="#">Contact</a>
                <ul>
                    <li>
                        <a href="https://bpj.org.uk/contact-the-club/">
                            Contact the Club
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/groups/blackpearjoggers/">
                            Facebook Community
                        </a>
                    </li>
                    <li>
                        <a href="https://bpj.typeform.com/to/pIodcN">
                            Incident Report Form
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

        <style jsx>{`
            @media (max-width: 959px) {
                nav {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    min-width: 200px;
                    padding: 20px;
                    overflow-y: auto;
                    transform: translate3d(-100%, 0, 0);
                    transition: transform 0.4s ease-in-out;
                    border-right: 2px solid #fff;
                    opacity: 0;
                    background: #222;
                }

                nav.active {
                    display: block;
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                }
            }

            ul {
                display: flex;
                margin: 0;
                padding: 0;
                list-style-type: none;
            }

            @media screen and (max-width: 960px) {
                ul {
                    flex-direction: column;
                }
            }

            li {
                position: relative;
                padding: 15px;
            }

            @media screen and (max-width: 960px) {
                li {
                    padding: 0 0 10px 0;
                }
            }

            a {
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
            }

            nav a:hover,
            nav a:focus {
                border-bottom: 2px solid #fff;
            }

            li:last-child ul {
                right: 0;
                left: auto;
            }

            li ul {
                display: none;
                position: absolute;
                z-index: 3;
                top: 41px;
                left: 0;
                padding: 10px 20px 10px 20px;
                background: #222;
            }

            @media screen and (max-width: 960px) {
                li ul {
                    position: static;
                    top: auto;
                    padding: 10px 0 0 10px;
                }
            }

            li ul.menu-right {
                right: 0;
                left: auto;
            }

            li ul li {
                margin-bottom: 10px;
                padding: 0;
                white-space: nowrap;
            }

            @media screen and (min-width: 960px) {
                ul li:hover ul {
                    display: block;
                }
            }

            ul li:focus-within ul {
                display: block;
            }

            .mobile-menu {
                display: none;
                flex-direction: column;
                justify-content: space-around;
                width: 30px;
                height: 30px;
                padding: 5px;
                overflow: hidden;
                border-radius: 2px;
                background-color: #fff;
                text-indent: 900px;
            }

            @media screen and (max-width: 959px) {
                .mobile-menu {
                    display: flex;
                }
            }

            .mobile-menu span {
                width: 100%;
                height: 3px;
                background-color: #000;
            }
        `}</style>
    </nav>
);

export default Navigation;
