import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api.js'
import Card from './Card';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isImagePopupOpen,
    onClose,
    selectedCard
}) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.loadUserInfoFromServer()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    React.useEffect(() => {
        api.getCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar-container" style={{ backgroundImage: `url(${userAvatar})` }}>
                    <button className="profile__edit-avatar-button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info-container">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" onClick={onEditProfile}></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="profile__add-button" onClick={onAddPlace}></button>
            </section>

            <PopupWithForm name='edit-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={onClose}>
                <div className="popup__input-container">
                    <input className="popup__input popup__input_type_name" id="avatar-input" type="url" name="avatar"
                        placeholder="Введите ссылку нового аватара" required />
                    <span className="popup__error avatar-input-error"></span>
                </div>
                <button className="popup__submit-button popup__submit-button_type_edit-avatar">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={onClose}>
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
                <button className="popup__submit-button popup__submit-button_type_edit-profile">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name='add-card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={onClose}>
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
                <button className="popup__submit-button popup__submit-button_type_add-card">Сохранить</button>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={onClose} isOpen={isImagePopupOpen} />

            <section className="elements">

                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={onCardClick} />
                ))}

            </section>

        </main>
    );
}

export default Main;
