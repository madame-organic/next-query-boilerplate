import { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from 'react-query';

import '../styles/index.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

function CustomApp({ Component, pageProps }: AppProps) {
    const queryCache = new QueryClient();
    return (
        <div>
            <Header />
            <QueryClientProvider client={queryCache}>
                <Component {...pageProps} />
            </QueryClientProvider>
            <Footer />
        </div>
    );
}

export default CustomApp;
