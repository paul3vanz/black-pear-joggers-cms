import { getAllBlogPosts } from '../core/api';
import { InferGetStaticPropsType } from 'next';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import Link from 'next/link';
import moment from 'moment-mini';
import { blogPostUrl } from '../core/helpers';
import LockUp from '../components/LockUp';

export default function SiteMap(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <Stack>
                <Container>
                    <h1>News</h1>

                    <ul>
                        {props.blogPosts?.map((blogPost) => (
                            <li key={blogPost.sys.id}>
                                <Link href={blogPostUrl(blogPost)}>
                                    <a>{blogPost.fields.title}</a>
                                </Link>{' '}
                                {moment(blogPost.fields.publishDate).fromNow()}
                            </li>
                        ))}
                    </ul>
                </Container>
            </Stack>

            <Stack backgroundColour="light">
                <Container>
                    <LockUp
                        image="https://bpj.org.uk/wp-content/uploads/2019/11/crowle-10k-2017.jpg"
                        content={
                            <div>
                                <h2>Group Photos</h2>
                                <p>
                                    The local Crowle 10K and the Worcester City 10K and Half Marathon are the most
                                    attended events by BPJs each year. It’s customary to get together for a photo in
                                    club kit. Here’s a selection of the photos over the years, showing the club’s
                                    growth!
                                </p>
                            </div>
                        }
                    />
                </Container>
            </Stack>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const blogPosts = await getAllBlogPosts(false);

    return {
        props: { blogPosts },
    };
}
