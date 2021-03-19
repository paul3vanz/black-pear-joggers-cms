import LazyLoad from 'react-lazy-load';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

const Stack = (props: PropsWithChildren<Props>) => (
    <>
        <section
            className={classNames(
                'relative',
                props.padding === 'larger' && 'py-16 sm:py-32',
                props.padding === 'sm' && 'py-8',
                !props.padding && 'py-12 sm:py-16',
                props.backgroundColour === 'dark' && 'bg-gray-800 text-white',
                props.backgroundColour === 'bright' && 'bg-primary',
                props.backgroundColour === 'light' && 'bg-gray-100'
            )}>
            {props.backgroundImage && (
                <div className="absolute z-10 top-0 bottom-0 w-full overflow-hidden pointer-events-none">
                    {/* <LazyLoad> */}
                    <img className="w-full h-full object-cover object-center" src={props.backgroundImage} alt="" />
                    {/* </LazyLoad> */}
                </div>
            )}
            <div className="relative z-20">
                {props.heading && (
                    <div className="container mx-auto">
                        <h2>{props.heading}</h2>
                    </div>
                )}

                {props.children}
            </div>
        </section>

        <style jsx>{`
            .image img {
                mix-blend-mode: multiply;
            }
        `}</style>
    </>
);

interface Props {
    backgroundColour?: string;
    backgroundImage?: string;
    children: any;
    heading?: string;
    padding?: string;
}

export default Stack;
