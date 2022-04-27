import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import chart from './assets/images/chart.png';
import sparkles from './assets/images/sparkles.png';
import paper from './assets/images/paper.png';

const endpoint = "https://api.shrtco.de/v2/"

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

function Form({ setInput }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="input-box" id="shorten-it">
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Shorten a link here..." />
      <button>Shorten It!</button>
    </form>
  )
}

function App() {
  const [input, setInput] = useState("")

  return (
    <div className="App">
      <main>
        <Header />
        <Banner />


        <section className="container position-relative ">
          <Form setInput={setInput} />

          <section className="result">{input}</section>

          <div className="description-title">
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>

          <section className="cards-section">
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

            <div className="position-relative">
              <img src={paper} alt="icon" />
              <div className="card">
                <h2>Detailed Records</h2>
                <p>Gain insights into who is clicking your links.
                Knowing when and where people engage with your content helps inform better decisions.
            </p>
              </div>
            </div>

            <div className="position-relative">
              <img src={sparkles} alt="icon" />
              <div className="card">
                <h2>Fully Customizable</h2>
                <p>Improve brand awareness and content discoverabilitu through customizable links,
                supercharging audience engagement.
            </p>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
