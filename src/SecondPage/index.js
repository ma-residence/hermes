import { SECOND_BLOCK, TITLE } from "./strings";
import "./style.css";

const SecondPage = () => (
  <section className="second-page">
    <h1 className="title">{TITLE}</h1>
    <div className="page-container">
      <div className="block">
        <img className="image" src="/logo-1.png" alt="Ensembl" />
      </div>
      <div className="block spaced-parag">
        <div className="paragraph">
          <h2>1</h2>
          <div>
            <h4>{SECOND_BLOCK.first_paragraph.title}</h4>
            <p>{SECOND_BLOCK.first_paragraph.text}</p>
          </div>
        </div>
        <div className="paragraph">
          <h2>2</h2>
          <div>
            <h4>{SECOND_BLOCK.first_paragraph.title}</h4>
            <p>{SECOND_BLOCK.first_paragraph.text}</p>
          </div>
        </div>
        <div className="paragraph">
          <h2>3</h2>
          <div>
            <h4>{SECOND_BLOCK.first_paragraph.title}</h4>
            <p>{SECOND_BLOCK.first_paragraph.text}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecondPage;
