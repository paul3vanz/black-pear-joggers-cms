import styled from 'styled-components';

const Wrapper = styled.div`
    & > *:last-child {
        margin-bottom: 0;
    }
`;

export const Container = ({ children }) => (
    <div className="container mx-auto">
        <div className="px-4">
            <Wrapper>{children}</Wrapper>
        </div>
    </div>
);
