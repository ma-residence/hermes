import { BUTTON_TEXT, CHECKBOX_LABEL } from "./strings";
import { SECOND_BLOCK } from "../strings";
import "./style.css";
import { useForm } from "react-hook-form";
import db from "../../firebase.config";
import omit from "lodash/omit";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const REQUIRED = "CHAMP OBLIGATOIRE";

const schema = yup.object().shape({
  fullName: yup.string().required(REQUIRED),
  phone: yup.string().required(REQUIRED),
  email: yup.string().email().required(REQUIRED),
  valid: yup.boolean().isTrue(REQUIRED),
  description: yup.string().required(REQUIRED),
});

const ContactForm = ({ city = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
          {...register("fullName", { required: true })}
          placeholder="Nom, prénom"
        />
        {errors.fullName?.message && <span>{errors.fullName.message}</span>}
        <input
          className="input"
          name="phone"
          defaultValue=""
          type="phone"
          {...register("phone", { required: true })}
          placeholder="Numéro de téléphone"
        />
        {errors.phone?.message && <span>{errors.phone?.message}</span>}
        <input
          className="input"
          name="email"
          defaultValue=""
          type="email"
          {...register("email", { required: true })}
          placeholder="Adresse e-mail"
        />
        {errors.email?.message && <span>{errors.email?.message}</span>}
        <textarea
          className="input textarea"
          name="description"
          defaultValue=""
          type="description"
          {...register("description", { required: true })}
          placeholder="Votre besoin"
        />
        {errors.description?.message && <span>{errors.description?.message}</span>}
        <div className="inline">
          <input
            {...register("valid", { required: true })}
            name="valid"
            type="checkbox"
          />
          <label htmlFor="valid">{CHECKBOX_LABEL}</label>
        </div>
        {errors.valid?.message && <span>{errors.valid?.message}</span>}
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
