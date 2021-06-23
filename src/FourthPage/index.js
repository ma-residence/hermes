import ContactForm from "../FirstPage/ContactForm";
import "./style.css";

const FourthPage = ({ tel = "", email = "", city = "", logo }) => {
  return (
    <>
      <section className="fourth-page gradient">
        <ContactForm city={city} />
      </section>
      <footer className="gradient">
        <img src={logo} alt="ccas" />
        <div className="infos">
          {city && <p>Ville : {city}</p>}
          {email && <p>Mail : {email}</p>}
          {tel && <p>Téléphone : {tel}</p>}
        </div>
      </footer>
    </>
  );
};

export default FourthPage;
