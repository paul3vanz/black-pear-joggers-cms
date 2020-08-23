import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getLayoutBySlug, getAllLayout } from '../core/api';
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Stack from '../components/Stack';
import Container from '../components/Container';
import { ILayoutFields, IHero, ICopy, ICard, ICards } from '../@types/generated/contentful';
import classNames from 'classnames';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Card from '../components/Card';
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
