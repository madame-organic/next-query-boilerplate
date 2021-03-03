import React, { useEffect, useState } from "react";

import AppLinks from './AppLinks';
import { useRouter } from "next/router";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    const router = useRouter();
    const { locale, asPath } = router;
    const isServer = typeof window === "undefined";
    // let lang = locale;
    // if (!isServer) {
    //     lang = localStorage.getItem('lang') || locale;
    // }
    // const [language, setLanguage] = useState(lang);
    const [language, setLanguage] = useState(locale);

    // useEffect(() => {
    //     let userLanguage;
    //     if (!isServer) {
    //         userLanguage = localStorage.getItem('lang');
    //     }
    //     if (userLanguage) {
    //         router.push(asPath, asPath, {locale: userLanguage}).then(() => {
    //             setLanguage(userLanguage);
    //         });
    //     }
    // });

    const changeLanguage = (e) => {
        e.preventDefault();
        const lang = e.target.value;
        if (!isServer) {
            localStorage.setItem('lang', lang);
        }
        router.push(asPath, asPath, { locale: lang }).then(() => {
            setLanguage(lang);
        });
    };

    return (
        <header>
            <AppLinks href="/" label="Home" />
            <nav>
                <AppLinks href="/about" label="About" />
                <AppLinks href="/contact" label="Contact" />
            </nav>
            <nav>
                <select name="lang" id="language" value={language} onChange={changeLanguage}>
                    <option value="en">EN</option>
                    <option value="th">TH</option>
                </select>
            </nav>
        </header>
    );
}

export default Header;
