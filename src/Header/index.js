import "./style.css";

const Header = ({ logo = "", tel = "", city = "" }) => (
  <header className="header gradient">
    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
      <img style={{ height: "80%" }} src={logo} alt="ccas" />
      <h4 style={{ marginBlockEnd: 0, margin: 18 }}>{city}</h4>
    </div>

    {tel && <div>T: {tel}</div>}
  </header>
);

export default Header;
