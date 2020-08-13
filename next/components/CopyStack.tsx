import Container from './Container';
import Stack from './Stack';

const CopyStack = (props) => {
    console.log(props);
    return (
        <section>
            <Stack visualStyle={props.visualStyle}>
                <Container>{props.children}</Container>
            </Stack>

            <style jsx>{``}</style>
        </section>
    );
};

export default CopyStack;
