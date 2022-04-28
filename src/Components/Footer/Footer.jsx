import './style.css';
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.png";
import pinterest from "../../assets/images/pinterest.png";
import instagram from "../../assets/images/instagram.png";

const info = [
  { img: facebook, title: "Features", item1: "Links Shortening", item2: "Branded Links", item3: "Analytics" },
  { title: "Resources", item1: "Blog", item2: "Developers", item3: "Support" },
  { title: "Company", item1: "About", item2: "Our Team", item3: "Careers", item4: "Contact" },
]

const icons = [
  { name: 'facebook', img: facebook },
  { name: 'twitter', img: twitter },
  { name: 'pinterest', img: pinterest },
  { name: 'instagram', img: instagram }
]

export function Footer() {
  return (
    <>
      <section className="purple-bg">
        <h1>Boost your links today</h1>
        <button className="get-started">
          <a href="#shorten-it">Get Started</a>
        </button>
      </section>
      <footer>
        <h2 className="bold">Shortly</h2>

        <div className="about">
          {info.map((item, i) => (
            <ul key={i}>
              <li className="bold">{item.title}</li>
              <li>{item.item1}</li>
              <li>{item.item2}</li>
              <li>{item.item3}</li>
              <li>{item.item4}</li>
            </ul>
          ))}

          <ul className="icons">
            {icons.map((icon, i) => (
              <li key={i}>
                <img src={icon.img} alt={icon.name} />
              </li>
            ))}
          </ul>
        </div>

      </footer>
    </>
  )
}
