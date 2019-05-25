import React, { useState } from "react";

const CodeBox = ({ quotes }) => {
  const [quote, setQuote] = useState({
    quote: "If you dont change, nothing will chnage for you",
    author: "Sakata Gintoki"
  });
  const randomNumberGenerator = max => Math.floor(Math.random() * max + 0);
  const onButtonClick = () => quotes[randomNumberGenerator(quotes.length)];
  return (
    <div id="quote-box" className="card-body">
      <h5 className="" id="text">
        {quote.quote}
      </h5>
      <p id="author">~{quote.author}</p>
      <button
        className="btn btn-primary mx-2"
        id="new-quote"
        onClick={() => setQuote(onButtonClick)}
      >
        Change Quote
      </button>

      <a
        id="tweet-quote"
        className="btn btn-outline-primary"
        href="http://twitter.com/intent/tweet"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
};

export default CodeBox;
