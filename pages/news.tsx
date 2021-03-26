import { Card } from '../components/Card';
import { Cards } from '../components/Cards';
import { Container } from '../components/Container';
import { InferGetStaticPropsType } from 'next';
import { Layout } from '../components/Layout';
import Link from 'next/link';
import LockUp from '../components/LockUp';
import { Paragraph } from '../components/Paragraph';
import { Stack } from '../components/Stack';
import { blogPostUrl } from '../core/helpers';
import { getAllBlogPosts } from '../core/api';
import moment from 'moment-mini';

export default function SiteMap(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <Stack>
                <Container>
                    <h1>News</h1>

                    <p className="mb-8">
                        Stay up to date with important club news and updates.{' '}
                        <a href="/contact-the-club/">Let us know</a> if you have some news that you’d like to share.
                        Also, check out our very active club{' '}
                        <a
                            href="https://www.facebook.com/groups/blackpearjoggers/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Facebook&nbsp;group
                        </a>
                        &nbsp;to catch the latest news.
                    </p>

                    <Cards>
                        {props.blogPosts?.map((post) => (
                            <Card
                                key={post.sys.id}
                                headline={post.fields.title}
                                link={blogPostUrl(post)}
                                imageUrl={post.fields.heroImage?.fields.file.url}
                                content={<Paragraph content={moment(post.fields.publishDate).fromNow()} />}
                            />
                        ))}
                    </Cards>
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
