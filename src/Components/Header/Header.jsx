import './style.scss';

const items = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Resources" }
]

export function Header() {
  return (
    <header>
      <ul>
        <li>Shortly</li>
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
