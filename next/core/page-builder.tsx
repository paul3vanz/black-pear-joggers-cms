import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import { IHero, ICopy, ICards, IPostsList, ILockUp } from '../@types/generated/contentful';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Card from '../components/Card';
import PostsList from '../components/PostsList';
import { getAllBlogPosts } from './api';
import { blogPostUrl } from './helpers';
import LockUp from '../components/LockUp';

export default function pageBuilder(props) {
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
                                                    key={copy.sys.id}
                                                    className={[
                                                        'o-grid',
                                                        fields.columns ? 'o-grid--gutter-lg' : '',
                                                    ].join(' ')}>
                                                    <div
                                                        className={[
                                                            'o-grid__item',
                                                            fields.padding ? 'u-1/2@sm' : null,
                                                        ].join(' ')}>
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
                                                            key={card.sys.id}
                                                            headline={card.fields.title}
                                                            content={documentToReactComponents(card.fields.content)}
                                                            imageUrl={card.fields.image.fields.file.url}
                                                            link={card.fields.link}></Card>
                                                    ))}
                                                </Cards>
                                            );
                                        case 'postsList':
                                            const postsList = contentModule as IPostsList;

                                            const blogPosts = props.blogPosts;

                                            return <PostsList posts={blogPosts} />;

                                        case 'lockUp':
                                            const lockUp = contentModule as ILockUp;

                                            return (
                                                <LockUp
                                                    key={lockUp.sys.id}
                                                    content={documentToReactComponents(lockUp.fields.content)}
                                                    reverse={lockUp.fields.reverse}
                                                    image={
                                                        lockUp.fields.image
                                                            ? lockUp.fields.image.fields.file.url
                                                            : lockUp.fields.imageExternal
                                                    }
                                                />
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
