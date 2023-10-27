import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import CountryCapitalGame from './CountryCapitalGame';
import { countryToCapital } from './helper.js';

export default function App() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Match Country with Capital</h1>
      <h2>Score: {score}</h2>
      <CountryCapitalGame
        countryToCapital={countryToCapital}
        increaseScore={increaseScore}
      />
    </div>
  );
}
