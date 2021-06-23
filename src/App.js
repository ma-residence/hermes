import * as queryString from "query-string";
import "./App.css";
import FirstPage from "./FirstPage";
import FourthPage from "./FourthPage";
import Header from "./Header";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function App() {
  const city = queryString(window.location.search);
  console.log({ city });
  return (
    <div className="App">
      <Header />
      <FirstPage />
      <SecondPage />
      <div className="spacer gradient" />
      <ThirdPage />
      <FourthPage />
    </div>
  );
}

export default App;
