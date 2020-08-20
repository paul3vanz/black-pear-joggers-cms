import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug, getAllLayout } from '../core/api';
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import { ILayoutFields } from '../@types/generated/contentful';

export default function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Head>
                <title>{props.layout.title}</title>

                <meta name="description" content={props.layout.title} />
            </Head>

            <Layout>
                {props.layout.contentModules?.map(({ sys, fields }) => {
                    return (
                        <Stack
                            key={sys.id}
                            heading={fields.heading}
                            backgroundImage={fields.backgroundImage?.fields.file.url}
                            backgroundColour={fields.backgroundColour}
                            padding={fields.padding}>
                            <Container>
                                <div className={['o-grid', fields.columns ? 'o-grid--gutter-lg' : ''].join(' ')}>
                                    {fields.contentModules?.map((copy) => {
                                        switch (copy.sys.contentType.sys.id) {
                                            case 'copy':
                                                return (
                                                    <div
                                                        className={[
                                                            'o-grid__item',
                                                            fields.padding ? 'u-1/2@sm' : null,
                                                        ].join(' ')}
                                                        key={sys.id}>
                                                        {documentToReactComponents(copy.fields.copy)}
                                                    </div>
                                                );
                                        }
                                    })}
                                </div>
                            </Container>
                        </Stack>
                    );
                    // case 'layoutStackCards':
                    //     return (
                    //         <Stack visualStyle="light">
                    //             <Container>
                    //                 {contentModule.fields.headline && <h2>{contentModule.fields.headline}</h2>}
                    //                 <div className="u-push-bottom-md">
                    //                     <Cards>
                    //                         {contentModule.fields.contentModules.map(({ fields }) => (
                    //                             <Card
                    //                                 headline={fields.title}
                    //                                 imageUrl={fields.image?.fields.file.url}
                    //                                 content={documentToReactComponents(fields.content)}
                    //                                 cta={{ title: fields.linkTitle, link: fields.link }}></Card>
                    //                         ))}
                    //                     </Cards>
                    //                 </div>
                    //             </Container>
                    //         </Stack>
                    //     );
                })}
            </Layout>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await getAllLayout(false);

    return {
        paths: pages.map(({ fields }) => ({ params: { page: fields.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{
    layout: ILayoutFields;
}> = async ({ params }) => {
    const layout = await getLayoutBySlug(params.page.toString(), false);

    return {
        props: { layout },
    };
};
