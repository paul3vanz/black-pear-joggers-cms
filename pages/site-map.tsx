import { getAllBlogPosts, getAllLayout } from '../core/api';

import { Container } from '../components/Container';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import { Stack } from '../components/Stack';
import { blogPostUrl } from '../core/helpers';

export default function SiteMap(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <Stack>
                <Container>
                    <h1>Site map</h1>

                    <h2>Pages</h2>

                    <ul className="list-disc mb-4 ml-5">
                        {props.pages.map((page) => (
                            <li key={page.sys.id}>
                                <Link href={page.fields.slug === 'home' ? '/' : page.fields.slug}>
                                    <a>{page.fields.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <h2>News</h2>

                    <ul className="list-disc ml-5">
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

export async function getStaticProps({ params }) {
    const pages = await getAllLayout(false);
    const blogPosts = await getAllBlogPosts(false);

    return {
        props: { pages, blogPosts },
    };
}
