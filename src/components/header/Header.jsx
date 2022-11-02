import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
    return (
        <header id={"home"}>
            <div className={"container header__container"}>
                <h5>Hello friends, I'm</h5>
                <h1>Okoroafor Judith Ozioma</h1>
                <h5 className={"text-light"}>Backend Developer</h5>
                <CTA />
                <a href={"#contact"} className={"scroll__down"}>Scroll Down</a>
                <HeaderSocials />
            </div>
        </header>
    );
};
export default Header;