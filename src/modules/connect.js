const displayResult = document.getElementById('display');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ 9rTfnXYuiz3fkEn4zX0n/scores/';

const loadScores = (data) => {
  displayResult.innerHTML = '';
  data.forEach((scores) => { displayResult.innerHTML += `<li>${scores.user}:${scores.score}</li>`; });
};

const getData = async () => {
  const output = await fetch(url);
  const data = await output.json();
  const HideAndSeek = await data.result;
  loadScores(HideAndSeek);
};
export default getData;