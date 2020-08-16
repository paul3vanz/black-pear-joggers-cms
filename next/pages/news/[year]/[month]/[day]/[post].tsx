import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
    getLayoutBySlug,
    getAllLayout,
    getAllBlogPosts,
    getBlogPostBySlug,
} from '../../../../../core/api';
import { InferGetStaticPropsType, GetStaticPaths } from 'next';
import CopyStack from '../../../../../components/CopyStack';
import Head from 'next/head';
import Layout from '../../../../../components/Layout';
import { ILayoutCopy } from '../../../../../@types/generated/contentful';
import { ParsedUrlQuery } from 'querystring';

import moment from 'moment-mini';

export default function Home(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <div>
            <Head>
                <title>{props.blogPost.fields.title}</title>

                <meta
                    name="description"
                    content={props.blogPost.fields.description}
                />
            </Head>

            <Layout>
                <CopyStack>
                    {console.log(props)}
                    <h1>{props.blogPost.fields.title}</h1>
                    <div className="post">
                        {JSON.stringify(props.blogPost.fields.body)}
                    </div>
                </CopyStack>
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
    const blogPost = await getBlogPostBySlug(params.slug, false);

    return {
        props: { ...blogPost },
    };
}
