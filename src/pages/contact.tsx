import React from "react";

import Layout from "../components/Layout";
import en from '../../public/locale/en';
import th from '../../public/locale/th';
import {useRouter} from "next/router";

interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
    const router = useRouter();
    const { locale } = router;
    const language = locale === 'th' ? 'th' : 'en';
    const thaiDescription = "ติดต่อสอบถามเพิ่มเติม 1999/22 หมู่บ้านดิสทริค ศรีวรา ซอยลาดพร้าว 94 (ปัญจมิตร) ถนนศรีวรา" +
        " แขวงพลับพลา เขตวังทองหลาง กรุงเทพมหานคร 10310";
    const englishDescription = "To get in contact with us, please fill the contact form in this page and we'll get " +
        "back to you. Address: 1999/22, The District Sriwara, Phlabphla, Wang Thonglang, Bangkok 10310";
    const description = language === 'th' ? thaiDescription : englishDescription;
    const text = locale === 'th' ? th : en;
    return (
        <Layout
            pageTitle="Chu Choice - Contact"
            currentPageUrl="/contact"
            metaInfo={[
                {
                    name: "description",
                    content: description
                }
            ]}
        >
            <h1>Contact us</h1>
            <address>
                Visit us at: <br />
                {text.contact.website}<br />
                Box 564, Disneyland<br />
                USA
            </address>
        </Layout>
    );
}

export default Contact;
