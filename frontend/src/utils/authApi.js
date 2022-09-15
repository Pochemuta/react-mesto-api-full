const { Api } = require('./api');

class AuthApi extends Api {
  registerUser(userData) {
    const requestUrl = this._baseUrl + '/signup';
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(userData),
    }).then(this._checkResponse);
  }

  authorizeUser(userData) {
    const requestUrl = this._baseUrl + '/signin';
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(userData),
    }).then(this._checkAuthResponse);
  }

  checkToken() {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: {
        ...this._headers,
      },
      method: 'GET',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  logoutUser() {
    const requestUrl = this._baseUrl + '/signout';
    return fetch(requestUrl, {
      headers: {
        ...this._headers,
      },
      method: 'GET',
      credentials: 'include',
    }).then(this._checkAuthResponse);
  }

  _checkAuthResponse(res) {
    if (res.ok) {
      return res;
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }
}

const authApi = new AuthApi({
  baseUrl: 'https://api.mestofront.nem.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default authApi;
