import React from 'react';

import './guess-list.css';

// Game passes guesses as a prop to StatusSection, which then passes
// guesses as a prop to GuessList

export default function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}
