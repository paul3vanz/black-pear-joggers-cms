import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }

  h1, h2, h3 {
    ${tw`text-3xl font-bold mb-4`}
  }

  h2 {
    ${tw`text-2xl`}
  }

  h3 {
    ${tw`text-xl`}
  }

  p {
    ${tw`mb-4`}
  }

  a:focus {
    background-color: #ffbf47;
    outline: 3px solid #ffbf47;
    color: #000;
  }
`;

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
    </>
);

export default GlobalStyles;
