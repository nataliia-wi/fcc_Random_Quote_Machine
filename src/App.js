import './App.css';
import { useState } from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import quotes from './data/quotes.json';

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getColor());

  function getRandomColor(a, b) {
    let min = Math.ceil(a);
    let max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getColor() {
    return `rgb(${getRandomColor(0, 255)},${getRandomColor(0, 255)},${getRandomColor(0, 255)})`
  };

  function getRandomQuote() {
    let quoteContent = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quoteContent.quote);
    return quoteContent;
  };

  function changeQuoteColor() {
    setQuote(getRandomQuote());
    setRandomColor(getColor());
  };

  const transition = "all 1.5s";

  return (

    <div className="App" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box" style={{ color: randomColor, transition }}>

        <p id="text"><FaQuoteLeft size={20} style={{ marginRight: "10px" }} />
          {quote.quote}
          <FaQuoteRight size={20} style={{ marginLeft: "10px" }} /></p>
        <p id="author">
          -{quote.author}
        </p>
        <div className="buttons" >
          <button style={{ backgroundColor: randomColor, transition, color: "#fff " }} id="new-quote" onClick={changeQuoteColor} >New Quote</button>
          <button style={{ backgroundColor: randomColor, transition, color: "#fff " }}><a style={{ color: "#fff " }} href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            target="_blank"><FaTwitter /></a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
