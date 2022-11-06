import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleLinkChange(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({
            name,
            link
        })
    }

    return (
        <PopupWithForm name='add-card' title='Новое место' isOpen={isOpen} onClose={onClose} buttonText='Сохранить' onSubmit={handleSubmit}>
            <div className="popup__input-container">
                <input className="popup__input popup__input_type_place-name" id="place-name-input" type="text"
                    placeholder="Название" minLength="2" maxLength="30" name="name" value={name} onChange={handleNameChange} required />
                <span className="popup__error place-name-input-error"></span>
            </div>
            <div className="popup__input-container">
                <input className="popup__input popup__input_type_place-link" id="place-link-input" type="url"
                    placeholder="Ссылка на картинку" name="link" value={link} onChange={handleLinkChange} required />
                <span className="popup__error place-link-input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;