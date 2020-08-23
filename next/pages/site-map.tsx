import { getAllLayout, getAllBlogPosts } from '../core/api';
import { InferGetStaticPropsType } from 'next';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import Link from 'next/link';
import moment from 'moment-mini';

export default function SiteMap(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <Stack>
                <Container>
                    <h1>Site map</h1>

                    <h2>Pages</h2>

                    <ul>
                        {props.pages.map((page) => (
                            <li key={page.sys.id}>
                                <Link href={page.fields.slug === 'home' ? '/' : page.fields.slug}>
                                    <a>{page.fields.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <h2>News</h2>

                    <ul>
                        {props.blogPosts?.map((blogPost) => (
                            <li key={blogPost.sys.id}>
                                <Link href={blogPostUrl(blogPost)}>
                                    <a>{blogPost.fields.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Stack>
        </Layout>
    );
}

function blogPostUrl(blogPost): string {
    const publishDate = moment(blogPost.fields.publishDate);

    return [
        'news',
        publishDate.format('YYYY'),
        publishDate.format('MM'),
        publishDate.format('DD'),
        blogPost.fields.slug,
    ].join('/');
}

export async function getStaticProps({ params }) {
    const pages = await getAllLayout(false);
    const blogPosts = await getAllBlogPosts(false);

    return {
        props: { pages, blogPosts },
    };
}
