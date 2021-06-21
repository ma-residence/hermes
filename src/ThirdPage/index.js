import {
  PARAGRAPH,
  SECOND_PARAGRAPH_TITLE,
  TITLE,
  SECOND_PARAGRAPH,
} from "./strings";
import "./style.css";

const ThirdPage = () => {
  return (
    <section className="third-page">
      <div className="first-block">
        <div className="title-container">
          <h2 className="title">{TITLE}</h2>
        </div>
        <div className="paragraph-container">
          <p>{PARAGRAPH}</p>
        </div>
        <div className="stats-container">
          <div>
            <h2 className="stats">80%</h2>
            <p>de besoins servis par le réseau</p>
          </div>
          <div>
            <h2 className="stats">80%</h2>
            <p>de besoins servis par le réseau</p>
          </div>
          <div>
            <h2 className="stats">80%</h2>
            <p>de besoins servis par le réseau</p>
          </div>
        </div>
      </div>
      <div className="second-block">
        <div className="second-paragraph">
          <h3 className="parag-title">{SECOND_PARAGRAPH_TITLE}</h3>
          <p>{SECOND_PARAGRAPH}</p>
        </div>
        <div className="image-back-container">
            <img src="/logo-2.png" alt="icon" />
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
