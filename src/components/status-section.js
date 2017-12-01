import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
import AuralStatus from './aural-status';

// Game passes guesses as a prop to StatusSection, which then passes
// guesses as a prop to GuessList
// StatusSection also creates guessCount from guesses that it received as prop from Game,
// and then StatusSection passes guessCount as a prop to GuessCount

export default function StatusSection(props) {
  const { guesses, auralStatus } = props;
  const guessCount = guesses.length;

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount guessCount={guessCount} />
      <GuessList guesses={guesses} />
      <AuralStatus auralStatus={auralStatus} />
    </section>
  );
}
