import { BUTTON_TEXT, CHECKBOX_LABEL } from "./strings";
import { SECOND_BLOCK } from "../strings";
import "./style.css";
import { useForm } from "react-hook-form";
import db from "../../firebase.config";
import omit from "lodash/omit";
import { useState } from "react";

const ContactForm = ({ city = "" }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    db.collection("demands")
      .add({
        ...omit(data, "valid"),
        city,
      })
      .then(function () {
        setMessage("Votre besoin a été remonté avec succes.");
      })
      .catch(function () {
        setMessage("Erreur lors de l'envoi du formulaire");
      });
  };

  return (
    <div className="contact">
      <h1>{SECOND_BLOCK.title}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-contact">
        <input
          className="input"
          name="fullName"
          defaultValue=""
          type="text"
          {...register("name", { required: true })}
          placeholder="Nom, prénom"
        />
        <input
          className="input"
          name="phone"
          defaultValue=""
          type="phone"
          {...register("phone", { required: true })}
          placeholder="Numéro de téléphone"
        />
        <input
          className="input"
          name="email"
          defaultValue=""
          type="email"
          {...register("email", { required: true })}
          placeholder="Adresse e-mail"
        />
        <textarea
          className="input textarea"
          name="description"
          defaultValue=""
          type="description"
          {...register("decription", { required: true })}
          placeholder="Votre besoin"
        />
        <div className="inline">
          <input
            {...register("valid", { required: true })}
            name="valid"
            type="checkbox"
          />
          <label htmlFor="valid">{CHECKBOX_LABEL}</label>
        </div>
        {message && (
          <p style={{ color: "green", textAlign: "center" }}>{message}</p>
        )}
        <button className="submit-button gradient" type="submit">
          {BUTTON_TEXT}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;