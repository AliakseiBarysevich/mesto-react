import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function Register({ onRegister, ...props }) {
  const { values, handleChange, setValues } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    let { email, password } = values;
    onRegister(email, password);
  }

  return (
    <div className="register">
      <h3 className="register__heading">Регистрация</h3>
      <form
        className="register__form"
        onSubmit={handleSubmit}
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
            value={values.email || ""}
            onChange={handleChange}
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
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          {/* <span className="popup__error place-link-input-error"></span> */}
        </div>
        <button className="register__submit-button">Зарегистрироваться</button>
      </form>
      <p className="register__paragraph">
        Уже зарегистрированы?{" "}
        <Link className="register__paragraph-link" to="/sign-in">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
