import React from "react";

import Layout from "../components/Layout";
import en from '../../public/locale/en';
import th from '../../public/locale/th';
import {useRouter} from "next/router";

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
    const router = useRouter();
    const { locale } = router;
    const lang = locale === 'th' ? th : en;
    return (
        <Layout pageTitle="Madame Organic - Contact">
            <h1>Contact us</h1>
            <address>
                Visit us at: <br />
                {lang.contact.website}<br />
                Box 564, Disneyland<br />
                USA
            </address>
        </Layout>
    );
}

export default Contact;
