import React from 'react';

export default function Login(props) {
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
    props.onUserAuthorize({
      email, password,
    });
  }

  return (
    <div className="auth page__block_type_auth">
      <h1 className="title auth__title">Вход</h1>
      <form onSubmit={handleSubmit} action="/src/index.html"
            className="form auth__form" method="post"
            name="login">
        <fieldset name="user-field" className="fieldset form__fieldset">
          <input onChange={handleChangeEmail} value={email} className="input input_type_form input_theme_dark"
                 type="email"
                 placeholder="Email"/>
          <input onChange={handleChangePassword} value={password} className="input input_type_form input_theme_dark"
                 type="password"
                 placeholder="Пароль"/>
        </fieldset>
        <button className="button button_theme_dark button_type_form-submit"
                type="submit">Войти
        </button>
      </form>
    </div>
  );
}
