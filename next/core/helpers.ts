import moment from 'moment-mini';

export function blogPostUrl(blogPost): string {
    const publishDate = moment(blogPost.fields.publishDate);

    return [
        'news',
        publishDate.format('YYYY'),
        publishDate.format('MM'),
        publishDate.format('DD'),
        blogPost.fields.slug,
    ].join('/');
}

export function classNames(...classNames): string {
    return classNames.filter(Boolean).join(' ');
}
