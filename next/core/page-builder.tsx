import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { IHero, ICopy, ICards, IPostsList, ILockUp } from '../@types/generated/contentful';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Head from 'next/head';
import Card from '../components/Card';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LockUp from '../components/LockUp';
import PostsList from '../components/PostsList';
import Stack from '../components/Stack';
import Button from '../components/buttons/Button';

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
                                                            copy.fields.alignment
                                                                ? `u-text-${copy.fields.alignment}`
                                                                : '',
                                                        ].join(' ')}>
                                                        {documentToReactComponents(copy.fields.copy, richTextOptions)}
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
                                                            link={card.fields.link}
                                                        />
                                                    ))}
                                                </Cards>
                                            );
                                        case 'postsList':
                                            const postsList = contentModule as IPostsList;

                                            const blogPosts = props.blogPosts;

                                            return <PostsList key={postsList.sys.id} posts={blogPosts} />;

                                        case 'lockUp':
                                            const lockUp = contentModule as ILockUp;

                                            console.log(lockUp);

                                            return (
                                                <LockUp
                                                    key={lockUp.sys.id}
                                                    content={documentToReactComponents(
                                                        lockUp.fields.content,
                                                        richTextOptions
                                                    )}
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
                })}
            </Layout>
        </div>
    );
}

const richTextOptions: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const fields = node.data.target.fields;

            console.log(node);

            switch (node.data.target.fields.file.contentType) {
                case 'image/png':
                    return (
                        <p>
                            <img src={fields.file.url} alt={fields.title} />
                        </p>
                    );
            }
        },
        [INLINES.EMBEDDED_ENTRY]: (node) => renderEntry(node),
        [BLOCKS.EMBEDDED_ENTRY]: (node) => renderEntry(node),
    },
};

function renderEntry(node) {
    const fields = node.data.target.fields;

    switch (node.data.target.sys.contentType.sys.id) {
        case 'button':
            return <Button link={fields.link} title={fields.title} />;
        case 'list':
            const listItems = fields.listItem;

            return (
                <ul className="o-matrix-list-md u-text-bold u-text-center u-soft-top-md u-text-lg">
                    {listItems.map((listItem, index) => (
                        <li className="o-matrix-list__item u-push-left-md" key={index}>
                            {listItem}
                        </li>
                    ))}
                </ul>
            );
        default:
            return <div>Unknown embedded entry</div>;
    }
}
