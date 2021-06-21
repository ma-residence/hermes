import ContactForm from "../FirstPage/ContactForm";
import "./style.css";

const FourthPage = () => {
  return (
    <>
      <section className="fourth-page gradient">
        <ContactForm />
      </section>
      <footer className="gradient">
          <img src="/logo-ccas.png"  alt="ccas"/>
      </footer>
    </>
  );
};

export default FourthPage;
