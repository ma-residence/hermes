import { BUTTON_TEXT, CHECKBOX_LABEL } from "./strings";
import { SECOND_BLOCK } from "../strings";
import "./style.css";
import { useForm } from "react-hook-form";
import db from "../../firebase.config";
import omit from "lodash/omit";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Spinner from "../../Spinner";
import { useToasts } from "react-toast-notifications";

const REQUIRED = "CHAMP OBLIGATOIRE";

const schema = yup.object().shape({
  fullName: yup.string().required(REQUIRED),
  phone: yup.string().required(REQUIRED),
  email: yup.string().email().required(REQUIRED),
  valid: yup.boolean().isTrue(REQUIRED),
  description: yup.string().required(REQUIRED),
});

const ContactForm = ({ city = "" }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    setLoading(true);
    db.collection("demands")
      .add({
        ...omit(data, "valid"),
        city,
        timestamp: Date.now(),
      })
      .then(() => {
        addToast("Votre besoin a bien été enregistré", {
          appearance: "success",
          autoDismiss: true,
        });
        setLoading(false);
        reset();
      })
      .catch(() => {
        addToast("Erreur lors de l'envoi du formulaire", {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
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
        {errors.description?.message && (
          <span>{errors.description?.message}</span>
        )}
        <div className="inline">
          <input
            {...register("valid", { required: true })}
            name="valid"
            type="checkbox"
          />
          <label htmlFor="valid">{CHECKBOX_LABEL}</label>
        </div>
        {errors.valid?.message && <span>{errors.valid?.message}</span>}
        <button
          className="submit-button gradient"
          type="submit"
          disabled={loading}
        >
          {loading ? <Spinner /> : BUTTON_TEXT}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
