import React from "react"
import { Link } from "react-router-dom"


function Register({ email, password, setEmail, setPassword, handleRegister }) {

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__container-header">Регистрация</h2>
                <form
                    action="#"
                    className="login__form"
                    method="GET"
                    onSubmit={handleRegister}
                >
                    <fieldset className="login__form-settings">
                        <input
                            name="email"
                            id="email-input"
                            type="email"
                            className="login__input"
                            required
                            minLength="2"
                            maxLength="40"
                            placeholder="Email"
                            onChange={handleChangeEmail}
                            value={email || ""} />
                        <input
                            name="password"
                            id="password-input"
                            type="password"
                            className="login__input"
                            required
                            minLength="5"
                            maxLength="20"
                            placeholder="Пароль"
                            onChange={handleChangePassword}
                            value={password || ""} />
                        <button className="login__button" type="submit">Зарегистрироваться</button>
                        <Link className="login__signin-link" to="/signin">Уже зарегистрированы? Войти</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register