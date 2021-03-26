import { getAllBlogPosts, getBlogPostBySlug } from '../../../../../core/api';

import { Card } from '../../../../../components/Card';
import { Cards } from '../../../../../components/Cards';
import { Container } from '../../../../../components/Container';
import { CopyStack } from '../../../../../components/CopyStack';
import Frontmatter from '../../../../../components/Frontmatter';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../../../../../components/Layout';
import { Paragraph } from '../../../../../components/Paragraph';
import { Stack } from '../../../../../components/Stack';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment-mini';

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
                    }}
                />

                <CopyStack>
                    <div className="post">{documentToReactComponents(props.blogPost.fields.body)}</div>
                </CopyStack>

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
    const relatedBlogPosts = await getAllBlogPosts(false);

    return {
        props: { ...blogPost, relatedBlogPosts: relatedBlogPosts.slice(0, 3) },
    };
}

function blogPostUrl(blogPost): string {
    const publishDate = moment(blogPost.fields.publishDate);

    return [
        '/news',
        publishDate.format('YYYY'),
        publishDate.format('MM'),
        publishDate.format('DD'),
        blogPost.fields.slug,
    ].join('/');
}
