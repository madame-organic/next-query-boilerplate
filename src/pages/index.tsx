import React from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import en from '../../public/locale/en';
import th from '../../public/locale/th';

export default function Home() {
    const router = useRouter();
    const { locale } = router;
    const lang = locale !== 'th' ? en : th;

    return (
        <Layout pageTitle="Madame Organic">
            <h1>{lang.home.welcome}</h1>
        </Layout>
    );
}
