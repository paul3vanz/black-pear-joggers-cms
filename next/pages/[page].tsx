import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug, getAllLayout } from '../core/api';
import { InferGetStaticPropsType, GetStaticPaths } from 'next';
import CopyStack from '../components/CopyStack';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ILayoutCopy } from '../@types/generated/contentful';
import { ParsedUrlQuery } from 'querystring';

export default function Home(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <div>
            <Head>
                <title>{props.layout.title}</title>

                <meta name="description" content={props.layout.title} />
            </Head>

            <Layout>
                {props.layout.contentModules.map((contentModule) => {
                    switch (contentModule.sys.contentType.sys.id) {
                        case 'layoutCopy':
                            return (
                                <CopyStack
                                    key={contentModule.sys.id}
                                    id={contentModule.sys.id}
                                    visualStyle={
                                        (contentModule as ILayoutCopy).fields
                                            .visualStyle
                                    }>
                                    {documentToReactComponents(
                                        (contentModule as ILayoutCopy).fields
                                            .content
                                    )}
                                </CopyStack>
                            );
                    }
                })}
            </Layout>
        </div>
    );
}

export async function getStaticPaths() {
    const pages = await getAllLayout(false);

    return {
        paths: pages.map((page) => ({ params: { page: page.fields.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const layout = await getLayoutBySlug(params.page, false);

    return {
        props: { layout },
    };
}
