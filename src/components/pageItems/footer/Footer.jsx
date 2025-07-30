import logo from "../../../assets/logos/menstruatiedisk-logo-rood.png";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <footer className="footer">
        <div className="footer-menu">
          <h3>Meer info</h3>
          <ul>
            <li>
              <Link to="/faq">faq</Link>
            </li>
            <li>
              <Link to="/privacy-policy">privacy policy</Link>
            </li>
            <li>
              <Link to="/doneren">Doneren</Link>
            </li>
            <li>
              <Link to="/algemene-voorwaarden">Algemene voorwaarden</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-txt">
          <p>
            Deze website is een zuster-site van{" "}
            <a href="https://cupkiezer.nl" target="_blank" rel="noreferrer">
              Cupkiezer
            </a>
          </p>
          <p>
            De site is gemaakt door{" "}
            <a href="https://nynkek.nl/" target="_blank" rel="noreferrer">
              Nynkek
            </a>{" "}
            omdat weinig onafhankelijke informatie over menstruatiedisks in het
            Nederlands te vinden was. Terwijl het zo’n{" "}
            <span className="highlighter">geweldig duurzaam product</span> is.
          </p>
        </div>
        <div className="footer-logo">
          <img src={logo} alt="menstruatiedisk.nl logo" className="logo" />
          <div className="color-swatches">
            <div className="footer-color-orange"></div>
            <div className="footer-color-bluegreen"></div>
            <div className="footer-color-pink"></div>
            <div className="footer-color-yellow"></div>
            <div className="footer-color-red"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
