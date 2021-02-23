import React from 'react';
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
    pageTitle: string
}

const Layout: React.FC<ILayoutProps> = ({ pageTitle, children }) => {
    return (
        <>
            <Head>
                <title>
                    {pageTitle}
                </title>
            </Head>
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </>
    );
}

export default Layout;
