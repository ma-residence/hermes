import { SECOND_BLOCK, TITLE } from "./strings";
import "./style.css";

const SecondPage = () => (
  <div className="background">
    <section className="container second-page">
      <h1 className="title">{TITLE}</h1>
      <div style={{ margin: "auto" }} className="content">
        <div style={{ textAlign: "center"}} className="flex-one">
          <img
            className="image"
            src={`${process.env.PUBLIC_URL}/logo-1.png`}
            alt="Ensembl"
          />
        </div>
        <div className="spaced-parag flex-one">
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
  </div>
);

export default SecondPage;
