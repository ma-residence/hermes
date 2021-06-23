import ContactForm from "../FirstPage/ContactForm";
import "./style.css";

const FourthPage = ({ tel = "", email = "", city = "" }) => {
  return (
    <>
      <section className="fourth-page gradient">
        <ContactForm city={city} />
      </section>
      <footer className="gradient">
        <img src={`${process.env.PUBLIC_URL}/logo-ccas.png`} alt="ccas" />
        <div className="infos">
          {email && <p>Mail : {email}</p>}
          {tel && <p>Téléphone : {tel}</p>}
        </div>
      </footer>
    </>
  );
};

export default FourthPage;
