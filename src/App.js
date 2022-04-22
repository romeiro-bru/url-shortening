import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="banner">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>

        <section className="input-box">
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten It!</button>
        </section>
      </main>
    </div>
  );
}

export default App;
