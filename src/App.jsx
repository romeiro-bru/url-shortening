import './App.scss';
import { useState } from 'react';
import { Header } from './Components/Header/Header';
import { Form } from './Components/Form/Form';
import { Cards } from './Components/Cards/Cards';
import { Footer } from './Components/Footer/Footer';
import { LinksList } from './Components/LinksList/LinksList';

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

function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [shortened, setShortened] = useState("")

  return (
    <div className="App">
      <main>
        <Header />
        <Banner />
        <section className="container position-relative ">
          <Form shortened={shortened} setShortened={setShortened} list={list} setList={setList} input={input} setInput={setInput} />
          <LinksList list={list} />
          <div className="description-title">
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>

          <Cards />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
