import React from "react"
import {CurrentUserContext} from "../contexts/CurrentUserContext";


export default function Card(props) {

    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner === currentUser._id
    const isLiked = props.card.likes.some(i => i === currentUser._id)


    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`
      )

    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like-active' : ''}`
    )

    function handleClick() {
        props.onCardClick(props.card)
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }



    return(
        
        <div className="element">
            <img src={props.link} alt={props.name} className="element__image" onClick={handleClick}/>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <div className="element__description">
                <h2 className="element__text">{props.name}</h2>
                <div className="element__like-wrapper">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <div className="element__like-counter">{props.likes}</div>
                </div>
            </div>
        </div>
    )
}



