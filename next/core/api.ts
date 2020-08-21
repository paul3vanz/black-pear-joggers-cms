import { createClient, Entry, EntryCollection } from 'contentful';
import { ILayout, ILayoutFields, IBlogPostFields } from '../@types/generated/contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
});

const getClient = (preview) => (preview ? previewClient : client);

function parseAuthor({ fields }) {
    return {
        name: fields.name,
        picture: fields.picture.fields.file,
    };
}

function parsePost({ fields }) {
    return {
        title: fields.title,
        slug: fields.slug,
        date: fields.date,
        content: fields.content,
        excerpt: fields.excerpt,
        coverImage: fields.coverImage.fields.file,
        author: parseAuthor(fields.author),
    };
}

function parsePostEntries(entries, cb = parsePost) {
    return entries?.items?.map(cb);
}

export async function getPreviewPostBySlug(slug) {
    const entries = await getClient(true).getEntries({
        content_type: 'post',
        limit: 1,
        'fields.slug[in]': slug,
    });
    return parsePostEntries(entries)[0];
}

export async function getAllPostsWithSlug() {
    const entries = await client.getEntries({
        content_type: 'post',
        select: 'fields.slug',
    });
    return parsePostEntries(entries, (post) => post.fields);
}

export async function getAllPostsForHome(preview) {
    const entries = await getClient(preview).getEntries({
        content_type: 'post',
        order: '-fields.date',
    });
    return parsePostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
    const entry = await getClient(preview).getEntries({
        content_type: 'post',
        limit: 1,
        'fields.slug[in]': slug,
    });
    const entries = await getClient(preview).getEntries({
        content_type: 'post',
        limit: 2,
        order: '-fields.date',
        'fields.slug[nin]': slug,
    });

    return {
        post: parsePostEntries(entry)[0],
        morePosts: parsePostEntries(entries),
    };
}

export async function getAllBlogPosts(preview: boolean): Promise<Entry<IBlogPostFields>[]> {
    const blogPosts = await getClient(preview).getEntries<IBlogPostFields>({
        content_type: 'blogPost',
        order: '-fields.publishDate',
    });

    return blogPosts.items;
}

export async function getBlogPostBySlug(slug: string, preview: boolean) {
    const blogPost = await getClient(preview).getEntries<IBlogPostFields>({
        content_type: 'blogPost',
        'fields.slug[in]': slug,
    });

    console.log(blogPost.items);

    return {
        slug: 'membership',
        title: 'Membership',
        blogPost: blogPost.items[0],
    };
}

export async function getAllLayout(preview: boolean): Promise<Entry<ILayoutFields>[]> {
    const pages = await getClient(preview).getEntries<ILayoutFields>({
        content_type: 'layout',
        order: 'fields.slug',
    });

    return pages.items;
}

export async function getLayoutBySlug(slug: string, preview: boolean): Promise<ILayoutFields> {
    const layout = await getClient(preview).getEntries<ILayoutFields>({
        content_type: 'layout',
        'fields.slug': slug,
        include: 3,
    });

    return layout.items[0].fields;
}
