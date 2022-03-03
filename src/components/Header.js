import React from 'react';

import Logo from '../assets/social-media.png'
import { Nav, NavLink, Bars, NavMenu, Link } from './NavbarElement';
import "../css/nav.css"

const Header = () => {
  return (
    <>
        <Nav className="sticky-top">
            <NavLink to="/">
                <img
                    src={Logo}
                    style={{width:50,marginLeft:15}}
                />
            </NavLink>
            <Bars onClick={() => this.toggle()}/>
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <Link href="https://github.com/rakhahidayat/ifabula-test" activeStyle>
                    My Github
                </Link>
            </NavMenu>
        </Nav>
    </>
  );
};

export default Header;
