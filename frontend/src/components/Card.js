import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card({ card, onCardClick, onCardLike, onCardDelete }) {

    function handleClick() {
        onCardClick(card);
    };

    function handleLikeClick() {
        onCardLike(card);
    };

    function handleDeleteClick() {
        onCardDelete(card);
    };

    const translation = React.useContext(CurrentUserContext);

    let isOwn

    if (translation !== undefined) {
        isOwn = card.owner === translation._id;
    }

    let isLiked

    let likesLength

    if (card.likes !== undefined) {
        isLiked = card.likes.some(id => id === translation._id);
        likesLength = card.likes.length
    }

    console.log(card.likes, translation._id)

    return (
        <li className="element elements__element">
            <button onClick={handleDeleteClick} className={`element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`} />
            <img className="element__image" src={card.src} alt={card.title} onClick={handleClick} />
            <div className="element__text-info">
                <h2 className="element__text">{card.title}</h2>
                <div className="element__container">
                    <button type="button" onClick={handleLikeClick} className={`element__vector ${isLiked ? 'element__vector_active' : ""}`}></button>
                    <p className="element__likes">{likesLength}</p>
                </div>
            </div>
        </li>
    )
}

export default Card