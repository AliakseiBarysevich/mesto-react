import mestoLogo from '../images/logo_white.svg';
import React from 'react';

function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={mestoLogo} alt='Mesto Logo' />
    </header>
  );
}

export default Header;
