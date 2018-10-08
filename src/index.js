import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = `AIzaSyCCfpGv20X0pUfwq3zLXkjL9FCLMPUtpLg`;

//create a new component. Component should produce HTML
const App = () => {
  return <div>Hey There!</div>
}

//Take this generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
