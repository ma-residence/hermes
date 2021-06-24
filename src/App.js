import "./App.css";
import FirstPage from "./FirstPage";
import FourthPage from "./FourthPage";
import Header from "./Header";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import data from "./assets/data";

function App() {
  const city = window.location.search;

  const datas =
    data.terms_of_service.find(
      (elem) => elem.city.toLowerCase() === city.toLowerCase().substr(1)
    ) || data.terms_of_service[0];

  return (
    <div className="App">
      <Header
        logo={datas.logo}
        tel={datas.descriptionContact && datas.descriptionContact.tel}
        city={datas.city}
      />
      <FirstPage city={datas.city} />
      <SecondPage />
      <div className="spacer gradient" />
      <ThirdPage city={datas.city} />
      <FourthPage {...datas} {...datas.descriptionContact} />
    </div>
  );
}

export default App;
