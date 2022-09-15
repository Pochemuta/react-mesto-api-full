import React from "react"

function ImagePopup({ currentCard, isOpen, onClose }) {

    const { link, name } = currentCard

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`} id='view-card-popup'>
            <figure className="popup__figure">
                <button className="popup__container-exit-button" type="button" onClick={onClose}></button>
                <img
                    src={link ? link : ""}
                    alt={name ? name : ""}
                    className="popup__fullsize-photo" />
                <figcaption className="popup__photo-title">{name ? name : ""}</figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup;