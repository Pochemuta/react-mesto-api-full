import React from "react"
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm id="avatar-popup" title="Обновить аватар" formId="editAvatarForm" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <fieldset className="popup__form-settings">
                <input
                    name="avatar"
                    id="avatar-input"
                    type="url"
                    className="popup__input popup__input_type_link"
                    placeholder="Ссылка на аватар"
                    required
                    ref={avatarRef} />
                <span className="avatar-input-error"></span>
                <button
                    id="save-avatar__button"
                    className="popup__button"
                    type="submit"
                >
                    Сохранить
                </button>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditAvatarPopup