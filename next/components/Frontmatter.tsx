import styles from './Frontmatter.module.scss';
import moment from 'moment-mini';
import Container from './Container';
import Stack from './Stack';

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
        <div className={styles.frontmatter}>
            <Stack>
                <Container>
                    <h1>{props.title}</h1>

                    <div className={styles.authorNameDate}>
                        {!!props.author && (
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <img src={props.author.avatarUrl} alt="" />
                                </div>
                                <div className={styles.name}>
                                    Posted by&nbsp;
                                    <strong>{props.author.name}</strong>
                                </div>
                            </div>
                        )}
                        <div
                            title={moment(props.publishDate).format(
                                'dddd Do MMMM YYYY hh:mma'
                            )}>
                            {moment(props.publishDate).fromNow()}
                        </div>
                    </div>

                    <p className={styles.description}>{props.description}</p>
                </Container>
            </Stack>
            <img className={styles.hero} src={props.heroImageUrl} alt="" />
        </div>
    );
}
