import moment from 'moment-mini';

export function blogPostUrl(blogPost): string {
    const publishDate = moment(blogPost.fields.publishDate);

    return [
        '/news',
        publishDate.format('YYYY'),
        publishDate.format('MM'),
        publishDate.format('DD'),
        blogPost.fields.slug,
    ].join('/');
}

export function classNames(...classNames): string {
    return classNames.filter(Boolean).join(' ');
}

export function fileSize(bytes: number, decimals = 2): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function mapClassNames(value: string, map: { [key: string]: string }) {
    return map[value] || map.default || undefined;
}
