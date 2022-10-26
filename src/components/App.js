import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopus() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsImagePopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(selectedCard) {
        setIsImagePopupOpen(true);
        setSelectedCard(selectedCard);
    }

    return (
        <>
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm name='edit-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopus} buttonText='Сохранить'>
                <div className="popup__input-container">
                    <input className="popup__input popup__input_type_name" id="avatar-input" type="url" name="avatar"
                        placeholder="Введите ссылку нового аватара" required />
                    <span className="popup__error avatar-input-error"></span>
                </div>
            </PopupWithForm>

            <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopus} buttonText='Сохранить'>
                <div className="popup__input-container">
                    <input className="popup__input popup__input_type_name" id="name-input" type="text" minLength="2"
                        maxLength="40" name="name" required />
                    <span className="popup__error name-input-error"></span>
                </div>
                <div className="popup__input-container">
                    <input className="popup__input popup__input_type_job" id="job-input" type="text" minLength="2"
                        maxLength="200" name="about" required />
                    <span className="popup__error job-input-error"></span>
                </div>
            </PopupWithForm>

            <PopupWithForm name='add-card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopus} buttonText='Сохранить'>
                <div className="popup__input-container">
                    <input className="popup__input popup__input_type_place-name" id="place-name-input" type="text"
                        placeholder="Название" minLength="2" maxLength="30" name="name" required />
                    <span className="popup__error place-name-input-error"></span>
                </div>
                <div className="popup__input-container">
                    <input className="popup__input popup__input_type_place-link" id="place-link-input" type="url"
                        placeholder="Ссылка на картинку" name="link" required />
                    <span className="popup__error place-link-input-error"></span>
                </div>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopus} isOpen={isImagePopupOpen} />

        </>
    );
}

export default App;
