import { useEffect, useState } from 'react';
import { api } from '../utils/Api.js'
import Card from './Card';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick
}) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([
            api.loadUserInfoFromServer(),
            api.getCards()
        ])
            .then((data) => {
                const [userData, cardData] = data;
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardData);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

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

            <section className="elements">

                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={onCardClick} />
                ))}

            </section>

        </main>
    );
}

export default Main;
