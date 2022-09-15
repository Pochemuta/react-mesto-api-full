export class Api {
  constructor({ headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getInitialCards() {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  getUserInfo() {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  getPageNeedData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  updateUserInfo(body) {
    const requestUrl = this._baseUrl + '/users/me';
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  addNewCard(body) {
    const requestUrl = this._baseUrl + '/cards';
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  removeCard(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  addLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'PUT',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  removeLike(cardId) {
    const requestUrl = this._baseUrl + `/cards/${cardId}/likes`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  changeProfileAvatar(body) {
    const requestUrl = this._baseUrl + `/users/me/avatar`;
    return fetch(requestUrl, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }
}

const api = new Api({
  baseUrl: 'https://api.mestofront.nem.nomoredomains.work',
  headers: {
    authorization: 'ae466f98-7ffc-4435-a80d-300e1427093a',
    'Content-Type': 'application/json',
  },
});

export default api;
