class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkRes(res) {
        return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res}`);
    }

    getCardsData(token) {
        return fetch(`${this._url}cards`, {
            method: "GET",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
        })
            .then(this._checkRes)
    }

    postCard(cardData, token) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(cardData),
        })
            .then(this._checkRes)
    }

    deleteCard(cardId, token) {
        return fetch(`${this._url}cards/${cardId}`, {
            method: "DELETE",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
        })
            .then(this._checkRes)
    }

    getUserData(token) {
        return fetch(`${this._url}users/me`, {
            method: "GET",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` }
        })
            .then(this._checkRes)
    }

    patchUserData(userData, token) {
        return fetch(`${this._url}users/me`, {
            method: "PATCH",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(userData),
        })
            .then(this._checkRes)
    }

    patchAvatar(userAvatarLink, token) {
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(userAvatarLink),
        })
            .then(this._checkRes)
    }

    changeLikeCardStatus(cardId, isLiked, token) {
        return fetch(`${this._url}cards/likes/${cardId}`, {
            method: `${isLiked ? "DELETE" : "PUT"}`,
            headers: { ...this._headers, 'Authorization': `Bearer ${token}` }
        })
            .then(this._checkRes)
    }
}

export const api = new Api({
    url: 'https://api.dan2491.nomoredomains.work/',
    headers: {
        'Content-Type': 'application/json',
    }
})