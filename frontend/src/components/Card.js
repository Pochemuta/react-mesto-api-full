import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner === currentUser._id;
    const isLiked = props.card.likes.some(like => like === currentUser._id);

    const cardDeleteButtonClassName = isOwn ? 'elements__delete-button' : 'elements__delete-button_hidden';
    const cardLikeButtonClassName = isLiked ? 'elements__like-button elements__like-button_active' : 'elements__like-button';

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <article className="element-card">
            <div className="elements__card-image-container">
                <img
                    src={props.link}
                    alt={props.name}
                    className="elements__card-image"
                    onClick={handleCardClick} />
                <button
                    className={cardDeleteButtonClassName}
                    type="button"
                    onClick={handleDeleteClick}>
                </button>
            </div>
            <div className="elements__card-description">
                <h3 className="elements__place-name">{props.name}</h3>
                <div className="elements__like">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        onClick={handleLikeClick}>
                    </button>
                    <p className="elements__like-counter">{props.likes}</p>
                </div>
            </div>
        </article>
    )
}

export default Card