import Button from './buttons/Button';
import { Entry } from 'contentful';
import { IBlogPostFields } from '../@types/generated/contentful';
// import styles from './PostsList.module.scss';
import Link from 'next/link';
import { blogPostUrl } from '../core/helpers';
import moment from 'moment-mini';

export default function PostsList(props: { posts: Entry<IBlogPostFields>[] }) {
    return (
        <div className="block">
            <ul className="mb-4">
                {props.posts?.map((blogPost) => (
                    <li key={blogPost.sys.id}>
                        <Link href={blogPostUrl(blogPost)}>
                            <a>{blogPost.fields.title}</a>
                        </Link>{' '}
                        <span className="text-gray-500">{moment(blogPost.fields.publishDate).fromNow()}</span>
                    </li>
                ))}
            </ul>

            <Button link="/news" text="Read more news" />
        </div>
    );
}
