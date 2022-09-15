import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function Main(props) {
  const user = React.useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <div className="profile__image-container"
             onClick={props.onEditAvatar}>
          <img alt="Аватар профиля" className="profile__avatar"
               src={user.avatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{user.name}</h1>
          <p className="profile__subtitle">{user.about}</p>
          <button className="profile__edit-button"
                  onClick={props.onEditProfile} type="button">
          </button>
        </div>
        <button className="profile__add-button" type="button"
                onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="places">
        {props.cards.map((card) => <Card key={card._id} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike}
                                         onCardClick={props.onCardClick} card={card}/>)}
      </section>
    </>
  );
}
