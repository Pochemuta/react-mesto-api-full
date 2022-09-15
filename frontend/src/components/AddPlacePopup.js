import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function AddPlacePopup(props) {
  const [placeImage, setPlaceImage] = React.useState('');
  const [name, setName] = React.useState('');
  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangePlaceImg = (evt) => {
    setPlaceImage(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: name,
      link: placeImage,
    });
  }

  React.useEffect(() => {
      setName('');
      setPlaceImage('');
    }, [props.isOpen],
  );

  return (<PopupWithForm title="Новое место" name="new-place"
                         onSubmit={handleSubmit}
                         isOpen={props.isOpen}
                         onClose={props.onClose}
                         submitText="Создать">
    <fieldset className="popup__form-inputs">
      <input className="popup__form-input" id="place-name"
             maxLength="30" minLength="2"
             name="name"
             value={name}
             onChange={handleChangeName}
             placeholder="Название" required type="text"/>
      <span className="input-error place-name-error"></span>
      <input className="popup__form-input" id="place-img"
             value={placeImage}
             name="url"
             onChange={handleChangePlaceImg}
             placeholder="Ссылка на картинку"
             required
             type="url"/>
      <span className="input-error place-img-error"></span>
    </fieldset>
  </PopupWithForm>);
};
