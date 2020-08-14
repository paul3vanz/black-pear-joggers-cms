import { useState } from 'react';
import Link from 'next/link';

import styles from './Navigation.module.scss';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <a
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles.hamburger}
                href="#">
                <span>Open navigation menu</span>
            </a>

            <nav className={styles.nav} data-expanded={menuOpen}>
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
                                <a href="https://bpj.org.uk/charity/">
                                    Charity
                                </a>
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
            </nav>
        </div>
    );
};

export default Navigation;
