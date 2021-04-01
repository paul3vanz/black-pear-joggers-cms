import { Button } from './buttons/Button';
import { Card } from './Card';
import { Cards } from './Cards';
import { Entry } from 'contentful';
import { IBlogPostFields } from '../@types/generated/contentful';
import { Paragraph } from './Paragraph';
import { blogPostUrl } from '../core/helpers';
import moment from 'moment-mini';

export const PostsList = (props: { posts: Entry<IBlogPostFields>[] }) => (
    <div className="block">
        <Cards>
            {props.posts?.map((post) => (
                <Card
                    key={post.sys.id}
                    headline={post.fields.title}
                    link={blogPostUrl(post)}
                    imageUrl={post.fields.heroImage?.fields.file.url}
                    content={<Paragraph content={moment(post.fields.publishDate).fromNow()} />}
                />
            ))}
        </Cards>

        <div className="flex justify-center mt-16">
            <Button link="/news" text="Read more news" />
        </div>
    </div>
);
