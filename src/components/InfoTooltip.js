import React from "react";
import Success from "../images/Success.png";
import Fail from "../images/Fail.png";

function InfoTooltip({ isOpen, onClose, isSuccessful }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img
          className="popup__state-icon"
          src={isSuccessful ? Success : Fail}
          alt={isSuccessful ? "Успешный вход" : "Неупешный вход"}
        />
        <h3 className="popup__heading popup__heading_type_info-tooltip">
          {isSuccessful
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h3>
        <button className="popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
