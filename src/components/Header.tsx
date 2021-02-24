import React, { useState } from "react";

import AppLinks from './AppLinks';
import { useRouter } from "next/router";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    const router = useRouter();
    const { locale, asPath } = router;
    const [language, setLanguage] = useState(locale);

    const changeLanguage = (e) => {
        e.preventDefault();
        const lang = e.target.value;
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
