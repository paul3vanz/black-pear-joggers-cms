import { ButtonLightTextDarkBackground } from './buttons/Button';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const Heading = styled.h1.attrs(() => ({
    className: 'mb-4 inline-block bg-gray-900 inline-block px-4 py-2 mx-auto',
}))``;

const CopyWrapper = styled.div.attrs(() => ({
    className: 'sm:w-2/3 lg:w-1/2 mx-auto',
}))``;

const Copy = styled.div.attrs(() => ({
    className: 'mb-4',
}))`
    line-height: 36px;
    font-size: 20px;

    & a {
        white-space: nowrap;
    }

    & p {
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        background-color: #fff;
        color: #222;
        padding: 0 8px;
    }
`;

export const Hero = (props: { heading: string; copy: string | ReactNode; link: string; linkTitle: string }) => (
    <Wrapper>
        <Heading>{props.heading}</Heading>

        <CopyWrapper>
            <Copy>{props.copy}</Copy>
        </CopyWrapper>

        <div>
            <ButtonLightTextDarkBackground link={props.link} text={props.linkTitle} />
        </div>
    </Wrapper>
);
