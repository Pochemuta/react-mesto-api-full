import PopupWithForm from './PopupWithForm';
import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const user = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user, props.isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm title="Редактировать профиль" name="profile"
                   submitText="Сохранить"
                   isOpen={props.isOpen}
                   onClose={props.onClose}
                   onSubmit={handleSubmit}>
      <fieldset className="popup__form-inputs">
        <input className="popup__form-input" id="name"
               maxLength="40"
               minLength="2" name="title"
               value={name}
               onChange={handleChangeName}
               required
               type="text"/>
        <span className="input-error name-error"></span>
        <input className="popup__form-input" id="description"
               maxLength="200" minLength="2"
               name="subtitle"
               value={description}
               onChange={handleChangeDescription}
               required
               type="text"/>
        <span className="input-error description-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
