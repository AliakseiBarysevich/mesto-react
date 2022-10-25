import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
    const [isImagePopupOpen, setImagePopupOpen] = React.useState();
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function closeAllPopus() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setImagePopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(selectedCard) {
        setImagePopupOpen(true);
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
                isEditProfilePopupOpen={isEditProfilePopupOpen}
                isAddPlacePopupOpen={isAddPlacePopupOpen}
                isEditAvatarPopupOpen={isEditAvatarPopupOpen}
                isImagePopupOpen={isImagePopupOpen}
                onClose={closeAllPopus}
                selectedCard={selectedCard}
            />
            <Footer />
        </>
    );
}

export default App;
