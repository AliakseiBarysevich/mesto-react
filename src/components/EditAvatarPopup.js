import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        })
    }

    return (
        <PopupWithForm name='edit-avatar' title='Обновить аватар' isOpen={isOpen} onClose={onClose} buttonText='Сохранить' onSubmit={handleSubmit}>
            <div className="popup__input-container">
                <input className="popup__input popup__input_type_name" id="avatar-input" type="url" name="avatar"
                    placeholder="Введите ссылку нового аватара" ref={avatarRef} required />
                <span className="popup__error avatar-input-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;