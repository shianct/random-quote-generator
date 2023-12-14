import React from "react";

function QuoteButton(props) {
  return (
    <div className="buttons" style={{ backgroundColor: props.colour }}>
      <button
        id="new-quote-button"
        onClick={props.handleClick}
        style={{ backgroundColor: props.colour }}
      >
        New Quote
      </button>
    </div>
  );
}

export default QuoteButton;
