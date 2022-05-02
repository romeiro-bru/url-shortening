import './style.scss';
import menu from '../../assets/images/menu.png';

const items = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Resources" }
]

export function Header() {
  return (
    <header>
      <ul>
        <li className="brand">Shortly</li>
        <img className="menu" src={menu} alt="menu btn" />
        {items.map((item, i) => (
          <li key={i}>
            {item.name}
          </li>
        ))}
      </ul>

      <div className="login">
        <span>Login</span>
        <button>Sign Up</button>
      </div>
    </header>
  )
}
