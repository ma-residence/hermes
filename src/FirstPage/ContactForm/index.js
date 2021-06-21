import { BUTTON_TEXT, CHECKBOX_LABEL } from "./strings";
import { SECOND_BLOCK } from "../strings";

const ContactForm = () => (
  <div className="container contact">
    <h1>{SECOND_BLOCK.title}</h1>
    <form className="form-contact">
      <input
        className="input"
        name="fullName"
        type="text"
        placeholder="Nom, prénom"
      />
      <input
        className="input"
        name="phone"
        type="phone"
        placeholder="Numéro de téléphone"
      />
      <input
        className="input"
        name="email"
        type="email"
        placeholder="Adresse e-mail"
      />
      <textarea
        className="input textarea"
        name="email"
        type="email"
        placeholder="Votre besoin"
      />
      <div className="inline">
        <input name="valid" type="checkbox" />
        <label htmlFor="valid">{CHECKBOX_LABEL}</label>
      </div>
      <button className="submit-button gradient" type="submit">
        {BUTTON_TEXT}
      </button>
    </form>
  </div>
);

export default ContactForm;
