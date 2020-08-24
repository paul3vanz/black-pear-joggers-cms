import { getLayoutBySlug, getAllBlogPosts } from '../core/api';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { ILayoutFields } from '../@types/generated/contentful';
import pageBuilder from '../core/page-builder';
import PostsList from '../components/PostsList';
import LockUp from '../components/LockUp';

export default function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div>{pageBuilder(props)}</div>;
}

export const getStaticProps: GetStaticProps<{
    layout: ILayoutFields;
}> = async () => {
    const layout = await getLayoutBySlug('home', false);
    const blogPosts = await getAllBlogPosts(false);

    return {
        props: { layout, blogPosts },
    };
};
