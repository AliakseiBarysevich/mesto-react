import mestoLogo from "../images/logo_white.svg";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header({ isLoggedIn, userEmail, onSignOut }) {
  const location = useLocation();

  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <header className="header">
      <img className="header__logo" src={mestoLogo} alt="Mesto Logo" />

      <div className="header__container">
        {isLoggedIn && (
          <>
            <address className="header__email">{userEmail}</address>
            <button className="header__button" onClick={handleSignOut}>
              Выйти
            </button>
          </>
        )}
        {!isLoggedIn && (
          <nav>
            {location.pathname === "/sign-in" && (
              <NavLink className="header__link" to="/sign-up">
                Регистрация
              </NavLink>
            )}
            {location.pathname === "/sign-up" && (
              <NavLink className="header__link" to="/sign-in">
                Войти
              </NavLink>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
