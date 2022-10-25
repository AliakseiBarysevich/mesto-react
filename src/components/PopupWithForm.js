import React from 'react';

function PopupWithForm({name, title, children, isOpen, onClose}) {

    return (
            <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <h3 className="popup__heading">{title}</h3>
                    <form className={`popup__form popup__form_type_${name}`} noValidate>
                        {children}
                    </form>
                    <button className="popup__close-button popup__close-button_type_edit-avatar" onClick={onClose}></button>
                </div>
            </div>
    );
}

export default PopupWithForm;
