import styles from './Frontmatter.module.scss';
import moment from 'moment-mini';
import Container from './Container';
import Stack from './Stack';

export default function Frontmatter(props: {
    title: string;
    description: string;
    publishDate: string;
    heroImageUrl: string;
}) {
    return (
        <div className={styles.frontmatter}>
            <Stack>
                <Container>
                    <h1>{props.title}</h1>

                    <p
                        title={moment(props.publishDate).format(
                            'dddd Do MMMM YYYY hh:mma'
                        )}>
                        {moment(props.publishDate).format('Do MMMM YYYY')}
                    </p>

                    <p className={styles.description}>{props.description}</p>
                </Container>
            </Stack>
            <img className={styles.hero} src={props.heroImageUrl} alt="" />
        </div>
    );
}
