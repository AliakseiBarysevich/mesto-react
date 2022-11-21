import React from "react";

function Login() {
  return (
    <div className="register">
      <h3 className="register__heading">Вход</h3>
      <form
        className="register__form"
        // onSubmit={onSubmit}
      >
        <div className="register__input-container">
          <input
            className="register__input"
            id="place-name-input"
            type="email"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            name="email"
            // value={values.name || ""}
            // onChange={handleChange}
            required
          />
          {/* <span className="popup__error place-name-input-error"></span> */}
        </div>
        <div className="register__input-container">
          <input
            className="register__input"
            id="place-link-input"
            type="password"
            placeholder="Пароль"
            name="password"
            // value={values.link || ""}
            // onChange={handleChange}
            required
          />
          {/* <span className="popup__error place-link-input-error"></span> */}
        </div>
        <button className="register__submit-button">Войти</button>
      </form>
    </div>
  );
}

export default Login;
