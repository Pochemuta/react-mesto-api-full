import React from "react";
import sucess from "../images/Union.svg"
import denied from "../images/Denied.svg"

function InfoTooltip({ isOpen, onClose, isSignupSucced }) {
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__container-exit-button" type="button" onClick={onClose}></button>
                <div className="popup__container-editor">
                    {!isSignupSucced ?
                        (<>
                            <img src={denied} alt="Отказ" className="popup__tooltip-image"></img>
                            <p className="popup__tooltip-text">Что-то пошло не так! Попробуйте ещё раз.</p>
                        </>)
                        :
                        (<>
                            <img src={sucess} alt="Успех" className="popup__tooltip-image"></img>
                            <p className="popup__tooltip-text">Вы успешно зарегистрировались!</p>
                        </>)
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip