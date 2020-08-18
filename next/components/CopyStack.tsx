import Container from './Container';
import Stack from './Stack';

const CopyStack = (props) => {
    return (
        <section>
            <Stack visualStyle={props.visualStyle}>
                <Container>
                    {props.headline && <h2>{props.headline}</h2>}

                    {props.children}
                </Container>
            </Stack>
        </section>
    );
};

export default CopyStack;
