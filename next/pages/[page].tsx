import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug, getAllLayout } from '../core/api';
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import { ILayoutFields, IHero, ICopy, ICard, ICards } from '../@types/generated/contentful';
import classNames from 'classnames';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Card from '../components/Card';

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
                                {fields.contentModules?.map((contentModule) => {
                                    switch (contentModule.sys.contentType.sys.id) {
                                        case 'copy':
                                            const copy = contentModule as ICopy;
                                            return (
                                                <div
                                                    className={[
                                                        'o-grid',
                                                        fields.columns ? 'o-grid--gutter-lg' : '',
                                                    ].join(' ')}>
                                                    <div
                                                        className={[
                                                            'o-grid__item',
                                                            fields.padding ? 'u-1/2@sm' : null,
                                                        ].join(' ')}
                                                        key={copy.sys.id}>
                                                        {documentToReactComponents(copy.fields.copy)}
                                                    </div>
                                                </div>
                                            );

                                        case 'hero':
                                            const hero = contentModule as IHero;

                                            return (
                                                <Hero
                                                    key={hero.sys.id}
                                                    heading={hero.fields.heading}
                                                    copy={documentToReactComponents(hero.fields.copy)}
                                                    link={hero.fields.link}
                                                    linkTitle={hero.fields.linkTitle}
                                                />
                                            );
                                        case 'cards':
                                            const cards = contentModule as ICards;
                                            // return JSON.stringify(cards, null, ' ');
                                            return (
                                                <Cards key={cards.sys.id}>
                                                    {cards.fields.cards.map((card) => (
                                                        <Card
                                                            headline={card.fields.title}
                                                            content={documentToReactComponents(card.fields.content)}
                                                            imageUrl={card.fields.image.fields.file.url}
                                                            link={card.fields.link}></Card>
                                                    ))}
                                                </Cards>
                                            );
                                    }
                                })}
                            </Container>
                        </Stack>
                    );
                    // case 'layoutStackCards':
                    //     return (
                    //         <Stack backgroundColour="light">
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
