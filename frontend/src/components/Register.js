import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Register(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    function handleEmailInput(evt) {
        setEmail(evt.target.value)
    }
    
    function handlePasswordInput(evt) {
        setPassword(evt.target.value)
    }

    function handleRegister(evt){
        evt.preventDefault()
        props.onRegister(email, password)
    }


    return(
        
        <section className='register'>
            
            <form className='register__form' onSubmit={handleRegister}>
            <h2 className="register__title">Регистрация</h2>
                <input className='register__input'
                    type='email'
                    autoComplete='off'
                    placeholder='Email'
                    required
                    onChange={handleEmailInput}
                />
                <input className='register__input'
                    type='password'
                    autoComplete='off'
                    placeholder='Пароль'
                    required
                    onChange={handlePasswordInput}
                />
                <button className='register__submit' type='submit'>Зарегистрироваться</button>
            </form>
            <Link to='/sign-in' className='register__link'>Уже зарегистрированы? Войти</Link>
        </section>
    )
}