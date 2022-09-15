import { CurrentUserContext } from '../context/CurrentUserContext';
import React from 'react';

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLike() {
    props.onCardLike(props.card);
  }

  function handleDelete() {
    props.onCardDelete(props.card);
  }

  const user = React.useContext(CurrentUserContext);
  const isLiked = props.card.likes.some(likeId => likeId === user._id);
  const cardLikeButtonClassName = 'place__like-button_active';
  return (<figure className="place">
    <img onClick={handleClick} alt={props.card.name} className="place__image" src={props.card.link}/>
    {props.card.owner === user._id ?
      (<button onClick={handleDelete} className="place__trash-button"></button>) :
      ''}
    <figcaption className="place__caption">
      <h3 className="place__name">{props.card.name}</h3>
      <div className="place__info-block">
        <button onClick={handleLike}
                className={isLiked ? `place__like-button ${cardLikeButtonClassName}` : 'place__like-button'}
                type="button"></button>
        <p className="place__count-like">{props.card.likes.length}</p>
      </div>
    </figcaption>
  </figure>);
}
