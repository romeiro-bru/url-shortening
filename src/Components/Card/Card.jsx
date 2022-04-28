import './style.css';

export function Card({ title, content, img }) {
  return (
    <div className="position-relative">
      <img src={img} alt="icon" />
      <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}
