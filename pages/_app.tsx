import '../styles/globals.css';

import { ConfigProvider } from '../core/providers/Config';
import { GlobalStyles } from '../core/GlobalStyles';
import { TrainingProvider } from '../core/providers/Training';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <ConfigProvider>
                <TrainingProvider>
                    <Component {...pageProps} />
                </TrainingProvider>
            </ConfigProvider>
        </>
    );
}

export default MyApp;
