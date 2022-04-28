import './style.css';
import chart from '../../assets/images/chart.png';
import sparkles from '../../assets/images/sparkles.png';
import paper from '../../assets/images/paper.png';

export function Card() {
  return (
    <div className="position-relative">
      <img src={chart} alt="icon" />
      <div className="card">
        <h2>Brand Recognition</h2>
        <p>Boost your brand recognition with each link.
        Generic links don't mean a thing. Branded links help instil
        confidence in your content.
      </p>
      </div>
    </div>
  )
}
