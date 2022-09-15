import React from "react";

export default function PopupWithForm(props) {
    return(
            <div className={`popup ${props.isOpen ? `popup_open`: ""}`} id={`${props.name}-popup`} onClick={props.onClickOnOverlay}>
                <div className="popup__container">
                    <form className="popup__content popup__form" name={props.form} autoComplete="off" onSubmit={props.onSubmit}>
                        <h2 className="popup__header">{props.title}</h2>
                        {props.children}
                        <button type="submit " className="popup__submit popup__button">{props.buttonText}</button>
                        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
                    </form>
                </div>
            </div>
    )
}