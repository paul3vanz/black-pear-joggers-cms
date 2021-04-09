import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { ICards, ICopy, IHero, ILockUp, IPostsList } from '../@types/generated/contentful';
import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Alignment } from './models/alignment.model';
import { Button } from '../components/buttons/Button';
import { Card } from '../components/Card';
import { Cards } from '../components/Cards';
import { Container } from '../components/Container';
import { Copy } from '../components/Copy';
import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import LockUp from '../components/LockUp';
import { PostsList } from '../components/PostsList';
import { Stack } from '../components/Stack';
import classNames from 'classnames';
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
                                <div className={classNames('', fields.columns ? 'flex flex-wrap space-x-32' : '')}>
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
                                            <div key={contentModule.sys.id} className="flex-1">
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
                            <div className="flex items-center mb-4">
                                <i className={classNames('mr-4 fas fa-2x', iconClass)}></i>
                                <span className="ml-2">
                                    <Link href={fields.file.url}>
                                        <a className="underline">
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
        case 'embedded-entry-block':
        case 'embedded-entry-inline':
            switch (node.data.target.sys.contentType.sys.id) {
                case 'button':
                    return (
                        <Button
                            link={fields.link}
                            text={fields.title}
                            colour={backgroundColour === 'dark' ? 'light' : ''}
                        />
                    );
                case 'list':
                    const listItems = fields.listItem;

                    return (
                        <ul className="flex flex-wrap font-bold justify-center mt-6 text-xl">
                            {listItems.map((listItem, index) => (
                                <li className="mx-8 mt-4" key={index}>
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
        <Copy>
            <div className={classNames(alignment && `u-text-${alignment}`)}>
                {documentToReactComponents(copy.fields.copy, getRichTextOptions(backgroundColour))}
            </div>
        </Copy>
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
    const imageResponsive = lockUp.fields.imageExternalResponsive
        ? {
              ...lockUp.fields.imageExternalResponsive.fields,
          }
        : null;

    return (
        <LockUp
            content={documentToReactComponents(lockUp.fields.content, getRichTextOptions(backgroundColour))}
            reverse={lockUp.fields.reverse}
            image={lockUp.fields.image ? lockUp.fields.image.fields.file.url : lockUp.fields.imageExternal}
            imageResponsive={imageResponsive}
        />
    );
}
