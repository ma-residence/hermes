import ContactForm from "./ContactForm";
import { FIRST_BLOCK } from "./strings";

const FirstPage = () => (
  <div className="background gradient">
    <section className="container first-page ">
      <div className="content">
        <div className="flex-one">
          <h1>{FIRST_BLOCK.title}</h1>
          <p>{FIRST_BLOCK.paragraph}</p>
        </div>
        <div className="flex-one">
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
);

export default FirstPage;
