import { getAllBlogPosts, getBlogPostBySlug } from '../../../../../core/api';
import matter, { GrayMatterFile } from 'gray-matter';

import { Card } from '../../../../../components/Card';
import { Cards } from '../../../../../components/Cards';
import { Container } from '../../../../../components/Container';
import { Copy } from '../../../../../components/Copy';
import { Entry } from 'contentful';
import Frontmatter from '../../../../../components/Frontmatter';
import Head from 'next/head';
import { IBlogPostFields } from '../../../../../@types/generated/contentful';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../../../../../components/Layout';
import { Paragraph } from '../../../../../components/Paragraph';
import ReactMarkdown from 'react-markdown';
import { Stack } from '../../../../../components/Stack';
import { blogPostUrl } from '../../../../../core/helpers';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import fs from 'fs';
import moment from 'moment-mini';

export default function Post(props: InferGetStaticPropsType<typeof getStaticProps>) {
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
                    heroImageUrl={props.blogPost.fields.heroImage?.fields.file.url}
                    author={{
                        name: props.blogPost.fields.author?.fields.name,
                        avatarUrl: props.blogPost.fields.author?.fields?.image?.fields.file.url,
                    }}
                />

                <Stack>
                    <Container>
                        <Copy>
                            <div className="post">
                                {typeof props.blogPost.fields.body === 'string' ? (
                                    <ReactMarkdown children={props.blogPost.fields.body} />
                                ) : (
                                    documentToReactComponents(props.blogPost.fields.body)
                                )}
                            </div>
                        </Copy>
                    </Container>
                </Stack>

                {props.relatedBlogPosts.length && (
                    <Stack backgroundColour="dark">
                        <Container>
                            <h2>Other news</h2>

                            <Cards>
                                {props.relatedBlogPosts?.map((post) => (
                                    <Card
                                        key={post.sys.id}
                                        headline={post.fields.title}
                                        imageUrl={post.fields.heroImage?.fields.file.url}
                                        content={<Paragraph content={post.fields.description} />}
                                        link={blogPostUrl(post)}></Card>
                                ))}
                            </Cards>
                        </Container>
                    </Stack>
                )}
            </Layout>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: [...(await getCmsBlogPosts()), ...(await getMarkdownBlogPosts())],
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let blogPost;
    let relatedBlogPosts = [];

    const markdownPath = `./pages/news/${Object.values(params).join('/')}.md`;

    if (fs.existsSync(markdownPath)) {
        const markdown = await import(`../../../${Object.values(params).join('/')}.md`);
        const frontmatter: GrayMatterFile<any> = matter(markdown.default);

        blogPost = {
            blogPost: {
                fields: {
                    slug: params.post,
                    title: frontmatter.data.title,
                    publishDate: frontmatter.data.date,
                    body: frontmatter.content,
                    author: { fields: { name: 'Black Pear Joggers', image: null } },
                },
            },
        };
    } else {
        blogPost = await getBlogPostBySlug(params.post, false);
        relatedBlogPosts = await getAllBlogPosts(false);
    }

    return {
        props: { ...blogPost, relatedBlogPosts: relatedBlogPosts.slice(0, 3) },
    };
}

async function getCmsBlogPosts() {
    const cmsBlogPosts: Entry<IBlogPostFields>[] = await getAllBlogPosts(false);

    return cmsBlogPosts.map((blogPost) => {
        const publishDate = moment(blogPost.fields.publishDate);

        return {
            params: {
                post: blogPost.fields.slug,
                year: publishDate.format('YYYY'),
                month: publishDate.format('MM'),
                day: publishDate.format('DD'),
            },
        };
    });
}

interface StaticPathParams {
    post: string;
    year: string;
    month: string;
    day: string;
}

async function getMarkdownBlogPosts() {
    const markdownBlogPosts = [
        {
            params: {
                post: 'groups-now-available-to-book',
                year: '2021',
                month: '03',
                day: '19',
            },
        },
    ];

    return markdownBlogPosts;
}
