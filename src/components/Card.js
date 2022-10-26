import React from 'react';

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <article className="element">
            <div className="element__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick} ></div>
            <button className="element__delete-button"></button>
            <div className="element__description-container">
                <h2 className="element__description-text">{card.name}</h2>
                <div className="element__description-like-container">
                    <button className="element__description-like"></button>
                    <p className="element__description-likes-number">{card.likes.length}</p>
                </div>
            </div>
        </article>
    );
}

export default Card;
