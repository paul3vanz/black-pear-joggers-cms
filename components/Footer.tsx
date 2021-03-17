import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="text-center bg-gray-900 text-white py-8">
            <img
                src="https://bpj.org.uk/wp-content/themes/BPJ/england-athletics-logo.svg"
                alt="England Athletics"
                width="200"
                height="68"
                className="mb-8 mx-auto"
            />

            <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center">
                <li>
                    <Link href="/club-constitution">
                        <a className="md:mx-3 no-underline">Club constitution</a>
                    </Link>
                </li>
                <li>
                    <Link href="/health-and-safety-policy-and-risk-assessment">
                        <a className="md:mx-3 no-underline">Health and safety policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/privacy-policy">
                        <a className="md:mx-3 no-underline">Privacy policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/terms-of-use">
                        <a className="md:mx-3 no-underline">Terms of use</a>
                    </Link>
                </li>
                <li>
                    <Link href="/site-map">
                        <a className="md:mx-3 no-underline">Site map</a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
