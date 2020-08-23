import { getLayoutBySlug, getAllLayout } from '../core/api';
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next';
import { ILayoutFields } from '../@types/generated/contentful';
import pageBuilder from '../core/page-builder';

export default function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return pageBuilder(props);
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await getAllLayout(false);

    return {
        paths: pages.map(({ fields }) => ({ params: { page: fields.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{
    layout: ILayoutFields;
}> = async ({ params }) => {
    const layout = await getLayoutBySlug(params.page.toString(), false);

    return {
        props: { layout },
    };
};
