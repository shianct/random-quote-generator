import QuoteButton from "./Button";
import QuoteContent from "./QuoteContent";
import { useState, SetStateAction } from "react";
import quoteCollection from "../data/quoteCollection";
import { useEffect } from "react";
import axios from "axios";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});
  const [colour, setColour] = useState(getRandomColor());

  function fetchQuotesFromApi() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        const quotesInfo = res.data.quotes;
        setQuotes(quotesInfo);
        selectRandomQuote(quotesInfo);
        const color = getRandomColor();
        document.body.style.color = color;
        document.body.style.backgroundColor = color;
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchQuotesFromApi();
  }, []);

  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function selectRandomQuote(quotesInfo) {
    var index = Math.floor(Math.random() * 4);
    var randomQuote = quotesInfo[index];
    setRandomQuote(randomQuote);
  }

  function handleClick() {
    selectRandomQuote(quotes);
    const color = getRandomColor();
    setColour(color); // Update the color state
    document.body.style.color = color;
    document.body.style.backgroundColor = color;
  }

  return (
    <div id="quote-box">
      <QuoteContent
        colour={colour}
        content={randomQuote.quote}
        author={randomQuote.author}
      />
      <QuoteButton colour={colour} handleClick={handleClick} />
    </div>
  );
}

export default Quotes;
