import React from "react";

import AppLinks from './AppLinks';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <header>
            <AppLinks href="/" label="Home" />
            <nav>
                <AppLinks href="/about" label="About" />
                <AppLinks href="/contact" label="Contact" />
            </nav>
        </header>
    );
}

export default Header;
