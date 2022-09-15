import headerLogoPath from '../images/header__logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../context/CurrentUserContext';
import React from 'react';

export default function Header(props) {
  const user = React.useContext(CurrentUserContext);
  const location = useLocation();
  let headerButton;
  let userEmailElement = '';
  if (location.pathname === '/sign-in') {
    headerButton = (<Link className="button header__button" to="sign-up">Регистрация</Link>);
  } else if (location.pathname === '/sign-up') {
    headerButton = (<Link className="button header__button" to="sign-in">Войти</Link>);
  } else if (props.loggedIn) {
    userEmailElement = (<p className="header__email">{user.email}</p>);
    headerButton = (<Link onClick={props.onLogOut} className="button header__button" to="sign-in">Выйти</Link>);
  }

  return (
    <header className="header">
      <img alt="Логотип Mesto" className="header__logo" src={headerLogoPath}/>
      <div className="header__info">
        {userEmailElement}
        {headerButton}
      </div>
    </header>
  );
}
