import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete }) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <a className="profile__image-link" onClick={onEditAvatar}>
                    <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
                </a>
                <div className="profile__container">
                    <div className="profile__info">
                        <h1 className="profile__info-name">{currentUser.name}</h1>
                        <p className="profile__info-description">{currentUser.about}</p>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <button className="profile__card-add-button" type="button" onClick={onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                {cards.map((card) =>
                    <Card
                        card={card}
                        name={card.name}
                        link={card.link}
                        likes={card.likes.length}
                        key={card._id}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />)}
            </section>
        </main>
    )
}

export default Main 