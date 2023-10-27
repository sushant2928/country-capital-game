const countryToCapital = {
  USA: 'Washington, D.C.',
  Canada: 'Ottawa',
  'United Kingdom': 'London',
  France: 'Paris',
  Germany: 'Berlin',
  Spain: 'Madrid',
  Italy: 'Rome',
  Australia: 'Canberra',
  Japan: 'Tokyo',
  India: 'New Delhi',
};
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
  return array;
}

export { shuffleArray, countryToCapital };
