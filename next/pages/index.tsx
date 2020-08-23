import { getLayoutBySlug } from '../core/api';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { ILayoutFields } from '../@types/generated/contentful';
import pageBuilder from '../core/page-builder';

export default function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
    return pageBuilder(props);
}

export const getStaticProps: GetStaticProps<{
    layout: ILayoutFields;
}> = async () => {
    const layout = await getLayoutBySlug('home', false);

    return {
        props: { layout },
    };
};
