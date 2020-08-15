import { getAllLayout } from '../core/api';
import { InferGetStaticPropsType } from 'next';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import Link from 'next/link';

export default function SiteMap(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <Layout>
            <Stack>
                <Container>
                    <h1>Site map</h1>

                    <ul>
                        <li>
                            <Link href="/membership">
                                <a>Link title</a>
                            </Link>
                        </li>
                    </ul>
                </Container>
            </Stack>
            <pre>{JSON.stringify(props, null, '   ')}</pre>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const pages = await getAllLayout(false);

    return {
        props: { pages },
    };
}
