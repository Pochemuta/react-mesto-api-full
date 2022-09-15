import React from 'react'
import Union from '../images/Union.svg'
import UnionErr from '../images/Union-err.svg'


function InfoTooltip(props) {
    
    return (
        <div className={`popup ${props.isOpen ? `popup_open`: ""}`} onClick={props.onClickOnOverlay}>
            <div className="popup__container">
                <div className="image-popup__wrap">
                    <img className='popup__tooltip-image' alt='tooltip' src={!props.isErrMsg ? Union : UnionErr}/>
                    <h2 className='popup__registration-message'>{!props.isErrMsg ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
                    <button className='popup__close-button' type='button' onClick={props.onClose}/>
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip