import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function EditAvatarPopup(props) {
  const avatarImageRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarImageRef.current.value,
    });
  }

  return (<PopupWithForm title="Обновить аватар"
                         isOpen={props.isOpen}
                         onClose={props.onClose}
                         onSubmit={handleSubmit}
                         name="change-avatar"
                         submitText="Сохранить"
                         containerClass="popup__container_type_change-avatar"
                         formClass="popup__form_type_change-avatar">
    <fieldset className="popup__form-inputs">
      <input
        ref={avatarImageRef}
        className="popup__form-input popup-change-avatar__input"
        id="avatar" name="url"
        placeholder="Ссылка на аватар" required
        type="url"/>
      <span
        className="input-error avatar-error popup-change-avatar__error"></span>
    </fieldset>
  </PopupWithForm>);
}
