import React from "react";
import PopupWithForm from "./PopupWithForm";

 export default function EditAvatarPopup(props) {
    const avatar = React.useRef()


    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onSubmit({
            avalink: avatar.current.value
        });
    }

    React.useEffect(() => {
        avatar.current.value = ''
    }, [props.isOpen])

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            onClickOnOverlay={props.onClickOnOverlay}
            form={'update-avatar'}
            title={'Обновить аватар'}
            buttonText={'Сохранить'}

            children={(
                <>
                    <input 
                        ref={avatar}
                        type='url'
                        className='popup__name popup__input'
                        name="avalink"
                        id="avalink"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span className="popup__avalink-error"/>
                </>
            )}
        />
    )
}