import { Container } from './Container';
import { LazyLoadImage } from './LazyLoadImage';
import { Stack } from './Stack';
import moment from 'moment-mini';

interface FrontmatterProps {
    title: string;
    description: string;
    publishDate: string;
    heroImageUrl: string;

    author: {
        name: string;
        avatarUrl: string;
    };
}

export default function Frontmatter(props: FrontmatterProps) {
    return (
        <>
            <div className="text-center">
                <Stack>
                    <Container>
                        <h1>{props.title}</h1>

                        {props.author && (
                            <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center">
                                {props.author.avatarUrl && (
                                    <div className="w-12 h-12 mr-2 mb-2 sm:mb-0 overflow-hidden rounded-full bg-gray-200 flex-shrink-0">
                                        <img
                                            src={props.author.avatarUrl}
                                            alt={props.author.name}
                                            width="30"
                                            height="30"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                )}
                                <div className="mr-2">
                                    Posted by&nbsp;
                                    <strong>{props.author.name}</strong>
                                </div>
                                <div
                                    className="text-gray-500"
                                    title={moment(props.publishDate).format('dddd Do MMMM YYYY h:mma')}>
                                    {moment(props.publishDate).fromNow()}
                                </div>
                            </div>
                        )}
                    </Container>
                </Stack>

                <LazyLoadImage className="h-36 lg:h-52 xl:h-72">
                    <img className="w-full h-36 lg:h-52 xl:h-72 object-cover" src={props.heroImageUrl} alt="" />
                </LazyLoadImage>
            </div>
        </>
    );
}
