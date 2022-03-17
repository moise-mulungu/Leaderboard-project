import getData from './modules/connect.js';
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ GEcL1Ly5bcEAuCVIDPR2/scores/';
const formInput = document.getElementById('formInput');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const refreshBtn = document.getElementById('refreshButton');

formInput.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = nameInput.value;
  const score = scoreInput.value;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      score,
      user,
    }),
  });
  nameInput.value = '';
  scoreInput.value = '';
  getData();

});
refreshBtn.addEventListener('click', getData);
getData();

