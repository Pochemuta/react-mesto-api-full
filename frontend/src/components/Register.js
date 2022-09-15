import { Link } from 'react-router-dom';
import React from 'react';

export default function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onUserRegister({
      email, password,
    });
  }

  return (
    <div className="auth page__block_type_auth">
      <h1 className="title auth__title">Регистрация</h1>
      <form onSubmit={handleSubmit} action="/src/index.html"
            className="form auth__form" method="post"
            name="register">
        <fieldset name="user-field" className="fieldset form__fieldset">
          <input onChange={handleChangeEmail} value={email} name="email"
                 className="input input_type_form input_theme_dark"
                 type="email" placeholder="Email"/>
          <input onChange={handleChangePassword} value={password} name="password"
                 className="input input_type_form input_theme_dark"
                 type="password" placeholder="Пароль"/>
        </fieldset>
        <button className="button button_theme_dark button_type_form-submit" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="notice auth__notice">Уже зарегистрированы? <Link className="link" to="/sign-in">Войти</Link></p>
    </div>
  );
}
