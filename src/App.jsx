import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Card } from './Components/Card/Card';
import chart from './assets/images/chart.png';
import sparkles from './assets/images/sparkles.png';
import paper from './assets/images/paper.png';

const cardsContent = [
  { title: "Brand Recognition", text: "Boost your brand recognition with each link. Generic links don\'t mean a thing. Branded links help instil confidence in your content." },
  { title: "Detailed Records", text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." },
  { title: "Fully Customizable", text: "Improve brand awareness and content discoverabilitu through customizable links, supercharging audience engagement." }
]

const endpoint = 'https://api.shrtco.de/v2'

const Banner = () => {
  return (
    <div className="banner">
      <h1>More than just shorter links</h1>
      <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <button className="get-started">
        <a href="#shorten-it">Get Started</a>
      </button>
    </div>
  )
}

function Form({ shortened, setShortened, list, setList, input, setInput }) {

  const handleSubmit = (e) => {
    const shortenLink = async () => {
      try {
        const response = await axios.get(`${endpoint}/shorten?url=${input}`)
        setShortened(response.data.result.short_link)
      } catch (error) {
        console.log(error)
      }
    }
    shortenLink()
    e.preventDefault()
    list && setList([...list, shortened].reverse());
    e.target.reset()
    console.log(1, list)
    console.log(2, shortened)
    console.log(3, list)
  }


  return (
    <form onSubmit={handleSubmit} className="input-box" id="shorten-it">
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Shorten a link here..." />
      <button type="submit">Shorten It!</button>
    </form>
  )
}

function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [shortened, setShortened] = useState("")

  const handleClickCopy = (e) => {

  }

  return (
    <div className="App">
      <main>
        <Header />
        <Banner />

        <section className="container position-relative ">
          <Form shortened={shortened} setShortened={setShortened} list={list} setList={setList} input={input} setInput={setInput} />

          <section className="links-list">
            <ul>
              {list.map((item, i) => (
                <li key={i}>
                  {item}
                  <button onClick={handleClickCopy}>Copy</button>
                </li>
              ))}
            </ul>
          </section>

          <div className="description-title">
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>

          <section className="cards-section">
            <Card img={chart} title={cardsContent[0].title} text={cardsContent[0].text} />
            <Card img={paper} title={cardsContent[1].title} text={cardsContent[1].text} />
            <Card img={sparkles} title={cardsContent[2].title} text={cardsContent[2].text} />
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
