import styles from './PostsList.module.scss';
import Link from 'next/link';
import moment from 'moment-mini';
import { IBlogPostFields } from '../@types/generated/contentful';
import { Entry } from 'contentful';
import { blogPostUrl } from '../core/helpers';
import Button from './buttons/Button';

export default function PostsList(props: { posts: Entry<IBlogPostFields>[] }) {
    return (
        <div className="">
            <ul>
                {props.posts?.map((blogPost) => (
                    <li key={blogPost.sys.id}>
                        <Link href={blogPostUrl(blogPost)}>
                            <a>{blogPost.fields.title}</a>
                        </Link>{' '}
                        {moment(blogPost.fields.publishDate).fromNow()}
                    </li>
                ))}
            </ul>

            <p>
                <Button link="/news" title="Read more news" />
            </p>
        </div>
    );
}
