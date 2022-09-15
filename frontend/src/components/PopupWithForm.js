import React from "react"

function PopupWithForm({ isOpen, id, title, onClose, formId, children, onSubmit }) {
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`} id={id}>
            <div className="popup__container">
                <button className="popup__container-exit-button" type="button" onClick={onClose}></button>
                <div className="popup__container-editor">
                    <h2 className="popup__container-header">{title}</h2>
                    <form
                        action="#"
                        className="popup__form"
                        method="GET"
                        id={formId}
                        noValidate
                        onSubmit={onSubmit}
                    >
                        {children}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PopupWithForm;