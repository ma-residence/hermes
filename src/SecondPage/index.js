import { SECOND_BLOCK, TITLE } from "./strings";
import "./style.css";

const SecondPage = () => (
  <div className="background">
    <section className="container second-page">
      <div
        style={{ flex: 1, justifyContent: "center" }}
        className="content column"
      >
        <h1 className="title">{TITLE}</h1>
        <div className="wrapper">
          <div style={{ textAlign: "center" }} className="flex-one">
            <img
              className="image"
              src={`${process.env.PUBLIC_URL}/logo-1.png`}
              alt="Ensembl"
            />
          </div>
          <div className="spaced-parag flex-one">
            <div className="paragraph">
              <div className="number">
                <h2>1</h2>
              </div>
              <div>
                <h4>{SECOND_BLOCK.first_paragraph.title}</h4>
                <p>{SECOND_BLOCK.first_paragraph.text}</p>
              </div>
            </div>
            <div className="paragraph">
              <div className="number">
                <h2>2</h2>
              </div>
              <div>
                <h4>{SECOND_BLOCK.second_paragraph.title}</h4>
                <p>{SECOND_BLOCK.second_paragraph.text}</p>
              </div>
            </div>
            <div className="paragraph">
              <div className="number">
                <h2>3</h2>
              </div>
              <div>
                <h4>{SECOND_BLOCK.third_paragraph.title}</h4>
                <p>{SECOND_BLOCK.third_paragraph.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SecondPage;
