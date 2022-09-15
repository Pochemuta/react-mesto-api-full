import React from "react"
import PopupWithForm from "./PopupWithForm"

export default function AddPlacePopup(props) {

    const [title, setTitle]=React.useState('')
    const [link, setLink]=React.useState('')


    function handleSetTitle(evt) {
        setTitle(evt.target.value)
    }

    function handleSetLink(evt) {
        setLink(evt.target.value)
    }


    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onSubmit({
            name: title,
            link: link,
        });
    }


    //Очистка полей формы при открытии 

    React.useEffect(() => {
        if (props.isOpen) {
            setTitle('')
            setLink('')
        }
    }, [props.isOpen])


    return(
        <PopupWithForm
                isOpen={props.isOpen}
                onClose={props.onClose}
                onSubmit={handleSubmit}
                onClickOnOverlay={props.onClickOnOverlay}
                form={'add-image'}
                title={'Новое место'}
                buttonText={'Создать'}

                children={(
                    <>
                        <input 
                            onChange={handleSetTitle}
                            value={title}
                            type='text'
                            className='popup__name popup__input'
                            name="name"
                            id="new-card-title"
                            maxLength="30"
                            minLength="2"
                            placeholder='Название'
                            required
                        />
                        <span className="popup__new-card-title-error"/>

                        <input 
                            onChange={handleSetLink}
                            value={link}
                            type='url'
                            className='popup__name popup__input'
                            name="link"
                            id="new-card-link"
                            placeholder='Ссылка на картинку'
                            required
                        />

                        <span className="popup__new-card-link-error"/>

                    </>
                )}
            />
    )
}