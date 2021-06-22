import ContactForm from "../FirstPage/ContactForm";
import "./style.css";

const FourthPage = () => {
  return (
    <>
      <section className="fourth-page gradient">
        <ContactForm />
      </section>
      <footer className="gradient">
        <img src={`${process.env.PUBLIC_URL}/logo-ccas.png`} alt="ccas" />
        <div className="infos">
          <p>Mail : vierzon@ccas.fr</p>
          <p>Téléphone : 06 00 00 00 00</p>
          <p>Adresse : 1 rue de la Solidarité - 18100 Vierzon</p>
        </div>
      </footer>
    </>
  );
};

export default FourthPage;
