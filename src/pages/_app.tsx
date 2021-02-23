import { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from 'react-query';

import '../styles/index.css';

function CustomApp({ Component, pageProps }: AppProps) {
    const queryCache = new QueryClient();
    return (
        <QueryClientProvider client={queryCache}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default CustomApp;
