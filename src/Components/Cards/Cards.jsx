import './style.scss';
import { Card } from './Card';
import chart from '../../assets/images/chart.png';
import sparkles from '../../assets/images/sparkles.png';
import paper from '../../assets/images/paper.png';

const cardsContent = [
  { title: "Brand Recognition", text: "Boost your brand recognition with each link. Generic links don\'t mean a thing. Branded links help instil confidence in your content." },
  { title: "Detailed Records", text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." },
  { title: "Fully Customizable", text: "Improve brand awareness and content discoverabilitu through customizable links, supercharging audience engagement." }
]

export function Cards() {
  return (
    <section className="cards">
      <Card img={chart} title={cardsContent[0].title} text={cardsContent[0].text} />
      <Card img={paper} title={cardsContent[1].title} text={cardsContent[1].text} />
      <Card img={sparkles} title={cardsContent[2].title} text={cardsContent[2].text} />
    </section>
  )
}

