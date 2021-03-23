import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllBlogPosts, getLayoutBySlug } from '../core/api';

import { ILayoutFields } from '../@types/generated/contentful';
import pageBuilder from '../core/pageBuilder';

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
