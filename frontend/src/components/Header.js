import React from 'react';
import { withRouter, useLocation, Link } from 'react-router-dom';
import logo from "../images/logo.svg";

function Header(props) {
    const { somePath } = useLocation()

    const linkPath = `${ somePath === '/sign-up' ? '/sign-in' : '/sign-up'}`
    const linkName = `${ somePath === '/sign-in' ? 'Войти' : 'Регистрация'}` 

    function signOut() {
        props.setIsLoggedIn(false)
        localStorage.removeItem('token')
        props.history.push('/sign-up')
        // console.log('token')
    }
    
    return(
        <header className="header">
            <img src={logo} className="header__logo" alt="Логотип"/>
            <nav className='header__nav'>
                {props.isLoggedIn ?
                    <>
                        <p className='header__nav header__mail'>{props.email}</p>
                        <Link to='/sign-in' className='header__nav header__toggling-link' type='button' onClick={signOut}>Выйти</Link>
                    </>
                     : (<Link to={linkPath} className='header__nav header__toggling-link' type='button'>{linkName}</Link>)
            }
            </nav>
        </header>
    )
    
}

export default withRouter(Header)