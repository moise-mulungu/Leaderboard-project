const displayResult = document.getElementById('display');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ GEcL1Ly5bcEAuCVIDPR2/scores/';

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