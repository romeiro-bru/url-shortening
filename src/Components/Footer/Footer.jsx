import './style.css';
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import pinterest from "../../assets/images/pinterest.png";

export function Footer() {
  return (
    <footer>
      <h2 className="bold">Shortly</h2>

      <div className="about">
        <ul>
          <li className="bold">Features</li>
          <li>Links Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <ul>
          <li className="bold">Reseources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul>
          <li className="bold">Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="icons">
          <li><img style={{ width: "1.3rem", marginRight: "1.2rem" }} src={facebook} alt="facebook" /></li>
          <li><img style={{ width: "1.5rem", marginRight: "1.2rem" }} src={twitter} alt="twitter" /></li>
          <li><img style={{ width: "1.5rem", marginRight: "1.2rem" }} src={pinterest} alt="pinterest" /></li>
          <li><img style={{ width: "1.5rem", marginRight: "1.2rem" }} src={instagram} alt="instagram" /></li>
        </ul>
      </div>

    </footer>
  )
}
