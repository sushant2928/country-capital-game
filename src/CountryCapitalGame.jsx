import React, { useState, useEffect, useCallback } from 'react';
import { shuffleArray } from './helper';

const CountryCapitalGame = ({ countryToCapital }) => {
  const [data, setData] = useState([]);
  const [prevSelectedValue, setPrevSelectedValue] = useState(null);
  const [wrongPair, setWrongPair] = useState(null);
  const [correctPair, setCorrectPair] = useState(null);

  useEffect(() => {
    const tempData = [
      ...Object.keys(countryToCapital),
      ...Object.values(countryToCapital),
    ];
    setData(shuffleArray(tempData));
  }, [countryToCapital]);

  const handleBtnClick = useCallback(
    ({ target: { id } }) => {
      if (!prevSelectedValue) {
        setPrevSelectedValue(id);
        if (Array.isArray(wrongPair)) setWrongPair(null);
        if (Array.isArray(setCorrectPair)) setWrongPair(null);
      } else {
        if (prevSelectedValue === id) return;
        if (
          countryToCapital[id] === prevSelectedValue ||
          countryToCapital[prevSelectedValue] === id
        ) {
          setCorrectPair([prevSelectedValue, id]);
          setTimeout(() => {
            let tempData = [...data];
            tempData = tempData.filter(
              (value) => value !== prevSelectedValue && value !== id
            );
            setData(tempData);
          }, 1000);
          setPrevSelectedValue(null);
        } else {
          setPrevSelectedValue(null);
          setWrongPair([prevSelectedValue, id]);
        }
      }
    },
    [prevSelectedValue, wrongPair, countryToCapital, data]
  );

  const getBgColor = useCallback(
    (id) => {
      if (prevSelectedValue === id) return 'blue';
      if (Array.isArray(wrongPair) && wrongPair.indexOf(id) > -1) return 'red';
      if (Array.isArray(correctPair) && correctPair.indexOf(id) > -1)
        return 'green';
    },
    [wrongPair, correctPair, prevSelectedValue]
  );

  return (
    <div className="country-capital-container">
      {data.map((value) => (
        <button
          key={value}
          id={value}
          onClick={handleBtnClick}
          style={{
            backgroundColor: getBgColor(value),
          }}
          className="location-btn"
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default CountryCapitalGame;
