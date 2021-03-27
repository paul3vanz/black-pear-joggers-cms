import '../styles/globals.css';

import { ConfigProvider } from '../core/providers/Config';
import { GlobalStyles } from '../core/GlobalStyles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <ConfigProvider>
                <Component {...pageProps} />
            </ConfigProvider>
        </>
    );
}

export default MyApp;
