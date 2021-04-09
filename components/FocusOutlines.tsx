import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
    .show-focus-outlines a:focus, .show-focus-outlines button:focus {
        background-color: #ffbf47;
        outline: 3px solid #ffbf47;
        color: #000;
    }
`;

export const FocusOutlines = () => {
    const handleClick = () => {
        console.log('click');
        document.body.classList.remove('show-focus-outlines');
    };

    const handleKeyDown = () => {
        console.log('key down');
        document.body.classList.add('show-focus-outlines');
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <>
            <GlobalStyle />
        </>
    );
};
