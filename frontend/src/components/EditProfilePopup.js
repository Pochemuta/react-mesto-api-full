import React from "react"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from "../contexts/CurrentUserContext"



export default function EditProfilePopup(props) {
    const [name, setName]= React.useState('')
    const [descrtiption, setDescription]= React.useState('')
    const currentUser = React.useContext(CurrentUserContext)


    // React.useEffect(() => {
    //     setName(currentUser.name);
    //     setDescription(currentUser.jo);
    //   }, [currentUser]); 

    function editDescription(evt) {
        setDescription(evt.target.value)
    }

    function editName(evt) {
        setName(evt.target.value)
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onSubmit({
            username: name,
            job: descrtiption,
        });
      }

      React.useEffect(() => {
        if (props.isOpen) {
            setName(currentUser.name)
            setDescription(currentUser.about)
        }
    }, [props.isOpen, currentUser])


    return(
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            onClickOnOverlay={props.onClickOnOverlay}
            form={'popup'}
            title={'Редактировать профиль'}
            buttonText={'Сохранить'}

            children={(
                <>
                    <input 
                        type='text'
                        className='popup__name popup__input'
                        name="username"
                        id="name"
                        maxLength="40"
                        minLength="2"
                        placeholder='Твое имя, странник?'
                        required
                        onChange={editName}
                        value={name}
                    />
                    <span className="popup__name-error"/>

                    <input 
                        type='text'
                        className='popup__name popup__input'
                        name="job"
                        id="job"
                        maxLength="200"
                        minLength="2"
                        placeholder='Кто ты, воин?'
                        required
                        onChange={editDescription}
                        value={descrtiption}
                    />

                    <span className="popup__job-error"/>

                </>
            )}
        />
    )
}