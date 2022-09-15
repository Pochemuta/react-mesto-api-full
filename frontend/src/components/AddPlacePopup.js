import React from "react"
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onCardData }) {

    const [cardName, setCardName] = React.useState('');
    const [cardLink, setCardLink] = React.useState('');

    function handleSetCardName(e) {
        setCardName(e.target.value)
    }

    function handleSetCardLink(e) {
        setCardLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onCardData({
            name: cardName,
            link: cardLink,
        });
    }

    return (
        <PopupWithForm id="edit-card-popup" title="Новое место" formId="addCardForm" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <fieldset className="popup__form-settings">
                <input
                    name="name"
                    id="place-input"
                    type="text"
                    className="popup__input popup__input_type_place"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    value={cardName}
                    onChange={handleSetCardName} />
                <span className="place-input-error"></span>
                <input
                    name="link"
                    id="link-input"
                    type="url"
                    className="popup__input popup__input_type_link"
                    placeholder="Ссылка на картинку"
                    required
                    onChange={handleSetCardLink}
                    value={cardLink} />
                <span className="link-input-error"></span>
                <button
                    id="create-card__button"
                    className="popup__button"
                    type="submit"
                >
                    Создать
                </button>
            </fieldset>
        </PopupWithForm>
    )
}

export default AddPlacePopup