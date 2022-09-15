class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  };

  getInitialCards() {
    console.dir(this._headers)
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  };

  getUserInfo() {
    console.dir(this._headers)
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  };

  editProfile(profileData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: profileData.name,
        about: profileData.about
      })
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  }

  createCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  }

  setLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  }

  deleteLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  }

  /*cardVisibilityStatus(cardId, isOwn) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: `${isOwn ? 'DELETE' : ""}`,
      headers: this._headers,
    })
    .then(res => this._getResponseData(res));
  }*/

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers,
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  }

  editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar.avatar
      })
    })
      .then(res => this._getResponseData(res))
      .catch((err) => { console.log(err) })
  }
};

function getToken() {
  return localStorage.getItem('jwt')
}

export const api = new Api({
  baseUrl: "https://api.sarmat.students.nomoredomains.work",
  headers: {
    'Authorization': `Bearer ${getToken()}`,
    'Content-Type': 'application/json'
  }
});

