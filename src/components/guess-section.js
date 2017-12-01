import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

// onMakeGuess was passed by Game as prop to GuessSection,
// which then passes it as a prop to GuessForm, where is used to process
// onSubmit value of guess
// Also feedback is passed by Game as a prop to GuessSection, which then passes 
// feedback as a prop to Feedback, which displays it
// The same is done with guessCount (to GuessSection and then to Feedback)

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
