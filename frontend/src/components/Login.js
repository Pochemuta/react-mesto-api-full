import React from "react";
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.nameButton = props.nameButton
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.username || !this.state.password) {
      return
    }
    this.props.onLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <>
      <div className="register">
        
        <form className="register__form" onSubmit={this.handleSubmit}>
        <h2 className="register__title">Вход</h2>
          <input  id="username" name="username" value={this.state.username} 
          onChange={this.handleChange} className="register__input" type="text" placeholder="Email" required />
          <input id="password" name="password" value={this.state.password} 
          onChange={this.handleChange} className="register__input" type="password" placeholder="Пароль" required />
          <button className="register__submit" type="submit">Войти</button>
        </form>
      </div>
      </>
    )
  }
}

export default withRouter(Login)