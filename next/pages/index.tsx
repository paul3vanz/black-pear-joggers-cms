import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug } from '../core/api';
import { InferGetStaticPropsType } from 'next';
import CopyStack from '../components/CopyStack';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ILayoutCopy } from '../@types/generated/contentful';

export default function Home(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <div>
            <Head>
                <title>Black Pear Joggers</title>

                <meta
                    name="description"
                    content="Worcester's friendly running club"
                />
            </Head>

            <Layout>
                {props.contentModules.map((contentModule) => (
                    <CopyStack
                        key={contentModule.sys.id}
                        id={contentModule.sys.id}
                        visualStyle={
                            (contentModule as ILayoutCopy).fields.visualStyle
                        }>
                        {documentToReactComponents(
                            (contentModule as ILayoutCopy).fields.content
                        )}
                    </CopyStack>
                ))}
            </Layout>
            {/* <pre>{JSON.stringify(props, null, '   ')}</pre> */}
        </div>
    );
}

export async function getStaticProps({ preview = false }) {
    const contentModules = await getLayoutBySlug('membership', true);

    return {
        props: { preview, contentModules },
    };
}
