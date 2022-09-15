import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm id="profile-popup" title="Редактировать профиль" formId="editProfileForm" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <fieldset className="popup__form-settings">
                <input
                    name="name"
                    id="name-input"
                    type="text"
                    className="popup__input popup__input_type_name"
                    required
                    minLength="2"
                    maxLength="40"
                    onChange={handleChangeName}
                    value={name || ""} />
                <span className="name-input-error"></span>
                <input
                    name="about"
                    id="description-input"
                    type="text"
                    className="popup__input popup__input_type_description"
                    required
                    minLength="2"
                    maxLength="200"
                    onChange={handleChangeDescription}
                    value={description || ""} />
                <span className="description-input-error"></span>
                <button className="popup__button" type="submit">Сохранить</button>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup