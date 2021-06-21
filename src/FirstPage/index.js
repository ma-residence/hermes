import ContactForm from "./ContactForm";
import { FIRST_BLOCK } from "./strings";

import "./style.css";

const FirstPage = () => (
  <section className="first-page gradient">
    <div className="block">
      <div className="container">
        <h1>{FIRST_BLOCK.title}</h1>
        <p>{FIRST_BLOCK.paragraph}</p>
      </div>
    </div>
    <div className="block">
      <ContactForm />
    </div>
  </section>
);

export default FirstPage;
