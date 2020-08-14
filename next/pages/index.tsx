import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug } from '../core/api';
import CopyStack from '../components/CopyStack';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home(props: Props) {
    return (
        <div>
            <Head>
                <title>Test</title>
            </Head>
            <Layout>
                {props.layout.map((layout) => (
                    <CopyStack
                        key={layout.sys.id}
                        id={layout.sys.id}
                        visualStyle={layout.fields.visualStyle}>
                        {documentToReactComponents(layout.fields.content)}
                    </CopyStack>
                ))}
            </Layout>
        </div>
    );
}

export async function getStaticProps({ preview = false }) {
    const layout = await getLayoutBySlug('membership', true);

    return {
        props: { preview, layout },
    };
}

interface Props {
    preview: boolean;
    layout: any;
}
