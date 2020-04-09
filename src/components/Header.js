import React from 'react'
import NavLogo from './navLogo.jsx'
import NavItems from './navItems.jsx';
import { data } from "../utils/mocks/data.js";

function Header() {
  return (
    <>
      <header className="header_area">

        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html">
                <NavLogo />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavItems dataItems={data.Header} />
            </div>
          </nav>
        </div>
      </header>
    </>

  );
}
export default Header;
