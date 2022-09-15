import React from "react";

export default function ImagePopup(props) {
    
    return (
        // {/* <!--Попап картинки--> */}

        <div className={`popup image-popup ${props.card ? 'popup_open' :''}`} onClick={props.onClickOnOverlay}>
            <div className="image-popup__wrap">
                <button className="image-popup__close-button popup__close-button" type="button"
                        id="#image-popup__close-button" onClick={props.onClose}></button>
                <img className="image-popup__image"
                     src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''}/>
                <h3 className="image-popup__description">{props.card ? props.card.name : ''}</h3>
            </div>
        </div>
    )
}   