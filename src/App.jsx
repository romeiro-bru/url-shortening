import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';

const Banner = () => {
  return (
    <div className="banner">
      <h1>More than just shorter links</h1>
      <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
      <button className="get-started">Get Started</button>
    </div>
  )
}

const Input = () => {
  return (
    <section className="input-box">
      <input type="text" placeholder="Shorten a link here..." />
      <button>Shorten It!</button>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Banner />
        <Input />
        <section className="background">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <section className="description-box">
            <div>
              <h2>Brand Recognition</h2>
              <p>Boost your brand recognition with each link.
              Generic links don't mean a thing. Branded links help instil
              confidence in your content.
            </p>
            </div>
            <div>
              <h2>Detailed Records</h2>
              <p>Gain insights into who is clicking your links.
              Knowing when and where people engage with your content helps inform better decisions.
            </p>
            </div>
            <div>
              <h2>Fully Customizable</h2>
              <p>Improve brand awareness and content discoverabilitu through customizable links,
              supercharging audience engagement.
            </p>
            </div>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
