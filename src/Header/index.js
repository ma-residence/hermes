import "./style.css";

const Header = ({ logo = "", tel = "" }) => (
  <header className="header gradient">
    <img style={{ height: "80%" }} src={logo} alt="ccas" />

    {tel && <div>T: {tel}</div>}
  </header>
);

export default Header;
