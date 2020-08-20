import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug, getAllLayout, getAllBlogPosts, getBlogPostBySlug } from '../../../../../core/api';
import { InferGetStaticPropsType, GetStaticPaths } from 'next';
import CopyStack from '../../../../../components/CopyStack';
import Head from 'next/head';
import Layout from '../../../../../components/Layout';
import { ICopy } from '../../../../../@types/generated/contentful';
import { ParsedUrlQuery } from 'querystring';

import moment from 'moment-mini';
import Frontmatter from '../../../../../components/Frontmatter';
import Stack from '../../../../../components/Stack';
import Container from '../../../../../components/Container';
import Card from '../../../../../components/Card';
import Cards from '../../../../../components/Cards';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Head>
                <title>{props.blogPost.fields.title}</title>

                <meta name="description" content={props.blogPost.fields.description} />
            </Head>

            <Layout>
                <Frontmatter
                    title={props.blogPost.fields.title}
                    description={props.blogPost.fields.description}
                    publishDate={props.blogPost.fields.publishDate}
                    heroImageUrl={props.blogPost.fields.heroImage.fields.file.url}
                    author={{
                        name: props.blogPost.fields.author.fields.name,
                        avatarUrl: props.blogPost.fields.author.fields.image.fields.file.url,
                    }}></Frontmatter>
                <CopyStack>
                    <div className="post">{documentToReactComponents(props.blogPost.fields.body)}</div>
                </CopyStack>
                <Stack visualStyle="light">
                    <Container>
                        <h2>Other news</h2>
                        <div className="u-push-bottom-md">
                            <Cards>
                                <Card
                                    headline="Post title"
                                    imageUrl="."
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel tempor nunc, elementum maximus libero."
                                    cta={{ title: 'CTA', link: 'test' }}></Card>
                                <Card
                                    headline="Post title"
                                    imageUrl="."
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel tempor nunc, elementum maximus libero."
                                    cta={{ title: 'CTA', link: 'test' }}></Card>
                                <Card
                                    headline="Post title"
                                    imageUrl="."
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel tempor nunc, elementum maximus libero."
                                    cta={{ title: 'CTA', link: 'test' }}></Card>
                                <Card
                                    headline="Post title"
                                    imageUrl="."
                                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel tempor nunc, elementum maximus libero."
                                    cta={{ title: 'CTA', link: 'test' }}></Card>
                            </Cards>
                        </div>
                    </Container>
                </Stack>
            </Layout>
        </div>
    );
}

export async function getStaticPaths() {
    const blogPosts = await getAllBlogPosts(false);

    return {
        paths: blogPosts.map((blogPost) => {
            const publishDate = moment(blogPost.fields.publishDate);

            return {
                params: {
                    post: blogPost.fields.slug,
                    year: publishDate.format('YYYY'),
                    month: publishDate.format('MM'),
                    day: publishDate.format('DD'),
                    publishDate: blogPost.fields.publishDate,
                },
            };
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const blogPost = await getBlogPostBySlug(params.post, false);

    return {
        props: { ...blogPost },
    };
}
