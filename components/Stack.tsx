import Container from './Container';
import { PropsWithChildren } from 'react';
import { classNames } from '../core/helpers';
import styled from 'styled-components';
import styledMap from 'styled-map';
import tw from 'twin.macro';

interface Props {
    backgroundColour?: string;
    backgroundImage?: string;
    children: any;
    heading?: string;
    padding?: string;
}

const Section = styled.section<PropsWithChildren<Props>>`
    ${tw`relative`}
    ${styledMap('backgroundColour', {
        dark: tw`bg-gray-900 text-white`,
        bright: tw`bg-primary`,
        light: tw`bg-gray-100`,
        default: tw`bg-white`,
    })}
    ${styledMap('padding', {
        larger: tw`py-16 sm:py-32`,
        sm: tw`py-8`,
        default: tw`py-12 sm:py-16`,
    })}
`;

const Stack = (props: PropsWithChildren<Props>) => (
    <>
        <Section backgroundColour={props.backgroundColour} padding={props.padding}>
            {props.backgroundImage && (
                <div className="absolute z-10 top-0 bottom-0 w-full overflow-hidden pointer-events-none">
                    {/* <LazyLoad> */}
                    <img className="w-full h-full object-cover object-center" src={props.backgroundImage} alt="" />
                    {/* </LazyLoad> */}
                </div>
            )}
            <div className="relative z-20">
                {props.heading && (
                    <Container>
                        <div className="mx-auto">
                            <h2>{props.heading}</h2>
                        </div>
                    </Container>
                )}

                {props.children}
            </div>
        </Section>

        <style jsx>{`
            .image img {
                mix-blend-mode: multiply;
            }
        `}</style>
    </>
);

export default Stack;
