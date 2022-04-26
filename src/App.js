import './App.css';
import facebook from "./assets/images/facebook.svg";
import twitter from "./assets/images/twitter.png";
import instagram from "./assets/images/instagram.png";
import pinterest from "./assets/images/pinterest.png";


function App() {
  return (
    <div className="App">
      <main>
        <header>
          <ul>
            <li><h2>Shortly</h2></li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>

          <div className="login">
            <span>Login</span>
            <button>Sign Up</button>
          </div>
        </header>

        <div className="banner">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="get-started">Get Started</button>
        </div>

        <section className="input-box">
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten It!</button>
        </section>

        <section className="background">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <section className="description-box">
            <div>
              <h2>Brand Recognition</h2>
              <p>Boost your brand recognition with each link.
              Generic links don't mean a thing. Branded links help instil
              confidence in your content.
            </p>
            </div>
            <div>
              <h2>Detailed Records</h2>
              <p>Gain insights into who is clicking your links.
              Knowing when and where people engage with your content helps inform better decisions.
            </p>
            </div>
            <div>
              <h2>Fully Customizable</h2>
              <p>Improve brand awareness and content discoverabilitu through customizable links,
              supercharging audience engagement.
            </p>
            </div>
          </section>
        </section>

        <section className="purple-bg">
          <h1>Boost your links today</h1>
          <button className="get-started">Get Started</button>
        </section>

        <footer>
          <h2 className="bold">Shortly</h2>
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
            <li><img style={{ width: "1.5rem" }} src={facebook} alt="facebook" /></li>
            <li><img style={{ width: "1.8rem" }} src={twitter} alt="twitter" /></li>
            <li><img style={{ width: "1.8rem" }} src={pinterest} alt="pinterest" /></li>
            <li><img style={{ width: "1.8rem" }} src={instagram} alt="instagram" /></li>
          </ul>
        </footer>
      </main>
    </div>
  );
}

export default App;
