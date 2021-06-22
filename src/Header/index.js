import "./style.css";

const Header = () => (
  <header className="header gradient">
    <img
      style={{ height: "80%" }}
      src={`${process.env.PUBLIC_URL}/logo-ccas.png`}
      alt="ccas"
    />

    <div>T: 00 00 00 00 00</div>
  </header>
);

export default Header;
