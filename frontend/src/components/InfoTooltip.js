export default function InfoTooltip(props) {
  let popupText;
  if (props.statusData.status) {
    popupText = props.statusData.status === 'success' ?
      'Вы успешно зарегистрировались!' :
      'Что-то пошло не так! Попробуйте ещё раз.';
  } else {
    popupText = '';
  }
  const statusIndicatorImg = props.statusData.status ? `popup__indication_type_${props.statusData.status}` : '';
  return (
    <div className={`popup popup-${props.name} ${props.statusData.isOpen ?
      'popup_opened' : ''}`}>
      <button onClick={props.onClose} className="popup__close-button" type="button">
      </button>
      <div className="popup__container popup__container_type_info">
        <div className={`popup__indication ${statusIndicatorImg}`}/>
        <p className="popup__message">{popupText}</p>
      </div>
    </div>);
}
