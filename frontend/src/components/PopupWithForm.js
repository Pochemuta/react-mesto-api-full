export default function PopupWithForm(props) {
  return (
    <div className={`popup popup-${props.name} ${props.isOpen ?
      'popup_opened' :
      ''}`}>
      <button onClick={props.onClose} className="popup__close-button" type="button">
      </button>
      <div className={`popup__container ${props.containerClass ?? ''}`}>
        <h2 className="popup__title form-title">{props.title}</h2>
        <form onSubmit={props.onSubmit} action="/src/index.html"
              className={`popup__form ${props.formClass ?? ''}`} method="post"
              name={props.name}>
          {props.children}
          <button className="popup__button-submit"
                  type="submit">{props.submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
