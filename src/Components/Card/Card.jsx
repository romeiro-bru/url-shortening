import './style.scss';

export function Card({ title, text, img }) {
  return (
    <div className="position-relative">
      <img src={img} alt="icon" />
      <div className="card">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
