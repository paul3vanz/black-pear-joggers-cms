import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug, getAllLayout } from '../core/api';
import { InferGetStaticPropsType, GetStaticPaths } from 'next';
import CopyStack from '../components/CopyStack';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ILayoutCopy } from '../@types/generated/contentful';
import { ParsedUrlQuery } from 'querystring';
import Stack from '../components/Stack';
import Container from '../components/Container';
import Cards from '../components/Cards';
import Card from '../components/Card';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
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
                                    headline={contentModule.fields.headline}
                                    visualStyle={contentModule.fields.visualStyle}
                                    styleTags={contentModule.fields.styleTags}>
                                    {documentToReactComponents(contentModule.fields.content)}
                                </CopyStack>
                            );
                        case 'layoutStackCards':
                            return (
                                <Stack visualStyle="light">
                                    <Container>
                                        {contentModule.fields.headline && <h2>{contentModule.fields.headline}</h2>}
                                        <div className="u-push-bottom-md">
                                            <Cards>
                                                {contentModule.fields.contentModules.map(({ fields }) => (
                                                    <Card
                                                        headline={fields.title}
                                                        imageUrl={fields.image?.fields.file.url}
                                                        content={documentToReactComponents(fields.content)}
                                                        cta={{ title: fields.linkTitle, link: fields.link }}></Card>
                                                ))}
                                            </Cards>
                                        </div>
                                    </Container>
                                </Stack>
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
