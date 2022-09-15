import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main(props) {

    const currentUser = React.useContext(CurrentUserContext)
    
    return (<main>
        <section className="profile">
            <div className="profile__wrap">
                <button type="button" className="profile__avatar-edit-button" onClick={props.onEditAvatar}>
                    <img src={currentUser.avatar} className="profile__avatar avatar" alt={currentUser.name} />
                </button>
                <div className="profile__info">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>

                </div>
            </div>
            <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
        </section>
        {/* <!--КАРТОЧКИ--> */}
        <section className="elements">
            {props.cards.map((card, _id) => (
                <Card
                    card={card}
                    key={_id}
                    link={card.link}
                    name={card.name}
                    likes={card.likes.length}
                    onCardLike={props.onCardLike}
                    onCardDelete={props.onCardDelete}
                    onCardClick={props.onCardClick}
                />
            ))}
            
        </section>
    </main>
    )
}