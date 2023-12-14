import React from "react";

function QuoteContent(props) {
  return (
    <div id="quote-content" style={{ color: props.colour }}>
      <p id="content">{props.content}</p>
      <span id="author">{props.author}</span>
    </div>
  );
}

export default QuoteContent;
