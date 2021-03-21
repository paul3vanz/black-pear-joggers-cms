import styled from 'styled-components';

interface Props {
    link: string;
    text: string;
    style?: string;
    backgroundColour?: string;
    size?: string;
    onClick?: () => void;
}

const StyledButton = styled.a`
    --color: ${(props) => (props.style === 'dark' ? '#fff' : '#222')};
    --active-color: ${(props) => (props.style === 'dark' ? '#222' : '#fff')};
    --background-color: ${(props) => (props.backgroundColour === 'dark' ? '#222' : 'transparent')};

    display: inline-block;
    transition: all 0.3s ease;
    border: 2px solid var(--color);
    border-radius: 3px;
    color: var(--color);
    padding: ${(props) => (props.size === 'sm' ? '0.25rem 0.5rem' : '0.5rem 1rem')};
    font-size: ${(props) => (props.size === 'sm' ? '1.125rem' : '1.25rem')};
    background-color: var(--background-color);

    &:hover,
    &:focus {
        background-color: var(--color);
        color: var(--active-color);
    }
`;

export default function Button(props: Props) {
    return (
        <StyledButton {...props} href={props.link}>
            {props.text}
        </StyledButton>
    );
}
