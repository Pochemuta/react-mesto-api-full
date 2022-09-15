export default function ImagePopup(props) {
  return (
    <div className={`popup popup-viewer ${props.card ? 'popup_opened' : ''}`}>
      <figure className="popup-viewer__container">
        <button onClick={props.onClose} className="popup-viewer__close-button popup__close-button"
                type="button">
        </button>
        <img alt={props.card.name} className="popup-viewer__image"
             src={props.card.link}/>
        <figcaption className="popup-viewer__caption">
          <p className="popup-viewer__text">{props.card.name}</p>
        </figcaption>
      </figure>
    </div>
  );
}
