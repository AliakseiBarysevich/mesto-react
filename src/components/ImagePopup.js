import React from 'react';

function ImagePopup(props) {

    return (
        <div className={`popup popup_type_large-image ${ props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__image-container">
            <figure className="popup__figure">
                <img src={props.card.link} alt="" className="popup__image" />
                <figcaption className="popup__image-caption"></figcaption>
            </figure>
            <button className="popup__close-button popup__close-button_type_large-image" onClick={props.onClose} ></button>
        </div>
    </div>
    );
}

export default ImagePopup;
