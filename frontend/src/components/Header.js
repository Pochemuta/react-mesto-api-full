import React from "react";
import { Link, Route } from "react-router-dom";


function Header({ isLoggedIn, isMobile, isMobileMenuActive, handleMobileMenu, email, signOut }) {
    return (
        <>
            {isMobile && isMobileMenuActive && isLoggedIn &&
                <div className="header__mobile-menu">
                    <div className="header__mobile-menu-container">
                        <h2 className="header__email">{email}</h2>
                        <Link className="header__auth-switcher" onClick={signOut}>Выйти</Link>
                    </div>
                </div>}
            <header className={`header ${isMobile && isLoggedIn && isMobileMenuActive && 'header_mobile'}`}>
                {isLoggedIn && <Route exact path="/">
                    <Link className="header__logo" to="/"></Link>
                    <div className="header__menu-container">
                        {isMobile ?
                            <button className={isMobileMenuActive ? "popup__container-exit-button" : "header__menu-button"} onClick={handleMobileMenu}></button> :
                            <>
                                <h2 className="header__email">{email}</h2>
                                <Link className="header__auth-switcher" to="/signin" onClick={signOut}>Выйти</Link>
                            </>}
                    </div>
                </Route>}
                <Route path="/signup">
                    <Link className="header__logo" to="/"></Link>
                    <div className="header__menu-container">
                        <Link className="header__auth-switcher" to="/signin">Вход</Link>
                    </div>
                </Route>
                <Route path="/signin">
                    <Link className="header__logo" to="/"></Link>
                    <div className="header__menu-container">
                        <Link className="header__auth-switcher" to="/signup">Регистрация</Link>
                    </div>
                </Route>
            </header>
        </>
    )
}

export default Header;