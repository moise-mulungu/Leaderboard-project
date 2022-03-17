const displayResult = document.getElementById('display');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api//games/Zl4d7IVkemOTTVg2fUdz/scores/'; 

const loadScores = (data) => {
    displayResult.innerHTML = '';
    data.forEach((scores) => {displayResult.innerHTML += '<p>${scores.addName}:${scores.addScore}</p>';});
};

const getData = async () => {
    const output = await fetch(url);
    const data = await output.json();
    const HideAndSeek = await data.result;
    loadScores(HideAndSeek);
}
export default getData;