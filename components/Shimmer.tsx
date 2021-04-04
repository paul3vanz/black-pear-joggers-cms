import styled from 'styled-components';

export const Shimmer = styled.div`
    background: #ccc;
    width: ${(props) => props.width}px;

    &::after {
        white-space: pre;
        content: ' ';
        line-height: inherit;
    }
`;
