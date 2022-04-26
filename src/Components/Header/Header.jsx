import './style.css';

export function Header() {
  return (
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
  )
}
