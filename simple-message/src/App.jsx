import React from "react";

function App() {
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  function handleClick() {
    setMessage("I love React");
  }
  return (
    <>
      {/* I am a React.Fragment - only works once as React needs things wrapped in a single HTML element */}
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </>
  );
}
export default App;
