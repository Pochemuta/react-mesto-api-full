export default class Api {
    constructor(options){
        this._url = options.baseUrl
        this._headers = options.headers 
    }

    _errCheck(res) {
        if(res.ok) {
            return res.json()
        }

        return Promise.reject(`Ошибка API -> ${res.status}`)
    }

    _useHeaders() {
        const token = localStorage.getItem('token')
        return {
            'Authorization' : `Bearer ${token}`,
            ...this._headers
        }
    }


    getUserFromSrv() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._useHeaders()
        })
        .then(this._errCheck)
    }

    getInitialCards() {
       return fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._useHeaders()
       })
       .then(this._errCheck)
    }

    patchProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._useHeaders(),
            body: JSON.stringify({
                name: data.username,
                about: data.job
            })
        })
        .then(this._errCheck)
    }

    sendNewImage(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._useHeaders(),
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(this._errCheck)
    }

    deleteCardFromSrv(data) {
        return fetch(`${this._url}/cards/${data._id}`, {
            method: 'DELETE',
            headers: this._useHeaders()
        })
        .then(this._errCheck)
    }


    sendLike(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
          method: 'PUT',
          headers: this._useHeaders(),
        })
          .then(this._errCheck)
      }

    deleteLike(_id) {
        return fetch(`${this._url}/cards/${_id}/likes`, {
          method: 'DELETE',
          headers: this._useHeaders(),
        })
          .then(this._errCheck)
    }

    avatarUpload(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._useHeaders(),
            body: JSON.stringify({
                avatar: avatar.avalink
            })
          })
            .then(this._errCheck)
    }

}

export const api = new Api({

    baseUrl: 'http://api.darkwingduck.nomoredomains.xyz',
    headers: {
      'Content-Type': 'application/json'
    }
  })