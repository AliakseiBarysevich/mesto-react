import PopupWithForm from "./PopupWithForm";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description
        })
    }

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    return (
        <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isOpen} onClose={onClose} buttonText='Сохранить' onSubmit={handleSubmit}>
            <div className="popup__input-container">
                <input className="popup__input popup__input_type_name" id="name-input" type="text" minLength="2"
                    maxLength="40" name="name" value={name} onChange={handleNameChange} required />
                <span className="popup__error name-input-error"></span>
            </div>
            <div className="popup__input-container">
                <input className="popup__input popup__input_type_job" id="job-input" type="text" minLength="2"
                    maxLength="200" name="about" value={description} onChange={handleDescriptionChange} required />
                <span className="popup__error job-input-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditProfilePopup;