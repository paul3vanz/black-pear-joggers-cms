import Container from './Container';
import Stack from './Stack';
// import styles from './Frontmatter.module.scss';
import moment from 'moment-mini';

export default function Frontmatter(props: {
    title: string;
    description: string;
    publishDate: string;
    heroImageUrl: string;

    author: {
        name: string;
        avatarUrl: string;
    };
}) {
    return (
        <>
            <div className="text-center">
                <Stack>
                    <Container>
                        <h1>{props.title}</h1>

                        <div className="flex items-center justify-center">
                            {props.author && (
                                <div className="flex items-center justify-center">
                                    <div className="w-12 h-12 mr-2 overflow-hidden rounded-full bg-gray-200">
                                        <img
                                            src={props.author.avatarUrl}
                                            alt={props.author.name}
                                            width="30"
                                            height="30"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
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
                        </div>
                    </Container>
                </Stack>

                <img className="w-full h-36 lg:h-52 xl:h-72 object-cover" src={props.heroImageUrl} alt="" />
            </div>
        </>
    );
}
