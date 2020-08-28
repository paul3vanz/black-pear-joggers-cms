import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Head from 'next/head';
import { ICards, ICopy, IHero, ILockUp, IPostsList } from '../@types/generated/contentful';
import Button from '../components/buttons/Button';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LockUp from '../components/LockUp';
import PostsList from '../components/PostsList';
import Stack from '../components/Stack';
import classNames from 'classnames';
import Link from 'next/link';
import { Alignment } from '../models/alignment.model';
import { fileSize } from './helpers';

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
                                <div className={classNames('o-grid', fields.columns ? 'o-grid--gutter-lg' : '')}>
                                    {fields.contentModules?.map((contentModule) => {
                                        let renderedModule;

                                        switch (contentModule.sys.contentType.sys.id) {
                                            case 'copy':
                                                renderedModule = renderCopy(contentModule);
                                                break;
                                            case 'hero':
                                                renderedModule = renderHero(contentModule);
                                                break;
                                            case 'cards':
                                                renderedModule = renderCards(contentModule);
                                                break;
                                            case 'postsList':
                                                renderedModule = renderPostsList(contentModule, props.blogPosts);
                                                break;
                                            case 'lockUp':
                                                renderedModule = renderLockUp(contentModule, fields.backgroundColour);
                                                break;
                                        }

                                        return (
                                            <div
                                                key={contentModule.sys.id}
                                                className={classNames(
                                                    'o-grid__item',
                                                    fields.columns === 2 && 'u-1/2@sm',
                                                    fields.columns === 3 && 'u-1/3@sm',
                                                    fields.columns === 4 && 'u-1/4@sm'
                                                )}>
                                                {renderedModule}
                                            </div>
                                        );
                                    })}
                                </div>
                            </Container>
                        </Stack>
                    );
                })}
            </Layout>
        </div>
    );
}

function getRichTextOptions(backgroundColour?: string): Options {
    return {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const fields = node.data.target.fields;
                const contentType = node.data.target.fields.file.contentType;

                switch (contentType) {
                    case 'image/png':
                        return (
                            <p>
                                <img src={fields.file.url} alt={fields.title} />
                            </p>
                        );
                    case 'application/CDFV2':
                    case 'application/pdf':
                        const extension = fields.file.fileName.split('.').pop().toUpperCase();

                        let iconClass;

                        switch (extension) {
                            case 'PDF':
                                iconClass = 'fa-file-pdf';
                                break;
                            case 'DOC':
                            case 'DOCX':
                                iconClass = 'fa-file-word';
                                break;
                            case 'XLS':
                            case 'XLSX':
                                iconClass = 'fa-file-excel';
                                break;
                            default:
                                iconClass = 'fa-file';
                                break;
                        }

                        return (
                            <div className="o-inline-icon">
                                <i className={classNames('o-inline-icon__icon fas fa-2x', iconClass)}></i>
                                <span className="o-inline-icon__text">
                                    <Link href={fields.file.url}>
                                        <a>
                                            {fields.title} ({extension}, {fileSize(fields.file.details.size)})
                                        </a>
                                    </Link>
                                </span>
                            </div>
                        );
                    default:
                        return <div>Unhandled embedded asset ({contentType})</div>;
                }
            },
            [INLINES.EMBEDDED_ENTRY]: (node) => renderEmbeddedEntry(node, backgroundColour),
            [BLOCKS.EMBEDDED_ENTRY]: (node) => renderEmbeddedEntry(node, backgroundColour),
            [INLINES.ENTRY_HYPERLINK]: (node) => renderEmbeddedEntry(node),
        },
    };
}

function renderEmbeddedEntry(node, backgroundColour?: string) {
    const fields = node.data.target.fields;
    const nodeType = node.nodeType;

    switch (node.nodeType) {
        case 'embedded-entry-inline':
            switch (node.data.target.sys.contentType.sys.id) {
                case 'button':
                    return <Button link={fields.link} title={fields.title} backgroundColour={backgroundColour} />;
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
            }
        case 'entry-hyperlink':
            return (
                <Link href={node.data.target.fields.slug}>
                    <a>{node.content[0].value}</a>
                </Link>
            );
        default:
            return <div>Unhandled embedded entry ({node.nodeType})</div>;
    }
}

function renderCopy(copy: ICopy, alignment?: string, backgroundColour?: string) {
    return (
        <div className={classNames(alignment && `u-text-${alignment}`)}>
            {documentToReactComponents(copy.fields.copy, getRichTextOptions(backgroundColour))}
        </div>
    );
}

function renderHero(hero: IHero) {
    return (
        <Hero
            heading={hero.fields.heading}
            copy={documentToReactComponents(hero.fields.copy)}
            link={hero.fields.link}
            linkTitle={hero.fields.linkTitle}
        />
    );
}

function renderCards(cards: ICards) {
    return (
        <Cards>
            {cards.fields?.cards?.map((card) => (
                <Card
                    key={card.sys.id}
                    headline={card.fields.title}
                    content={documentToReactComponents(card.fields.content)}
                    imageUrl={card.fields.image.fields.file.url}
                    link={card.fields.link}
                    alignment={cards.fields.alignment as Alignment}
                />
            ))}
        </Cards>
    );
}

function renderPostsList(postsList: IPostsList, posts) {
    return <PostsList posts={posts} />;
}

function renderLockUp(lockUp: ILockUp, backgroundColour?: string) {
    return (
        <LockUp
            content={documentToReactComponents(lockUp.fields.content, getRichTextOptions(backgroundColour))}
            reverse={lockUp.fields.reverse}
            image={lockUp.fields.image ? lockUp.fields.image.fields.file.url : lockUp.fields.imageExternal}
        />
    );
}
