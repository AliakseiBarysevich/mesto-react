import React from "react";
import Success from "../images/Success.png";

function InfoTooltip() {
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
        <img
          className="popup__state-icon"
          src={Success}
          alt="Результат выполнения входа"
        />
        <h3 className="popup__heading popup__heading_type_info-tooltip">Тут будет текст</h3>
        <button
          className="popup__close-button"
          // onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
