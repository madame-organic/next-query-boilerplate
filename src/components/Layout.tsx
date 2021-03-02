import React from 'react';
import Head from "next/head";

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
                {children}
            </main>
        </>
    );
}

export default Layout;
