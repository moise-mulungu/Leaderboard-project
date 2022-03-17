import getData from '.modules/connect.js';
import './style.css';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api//games/Zl4d7IVkemOTTVg2fUdz/scores/';
const formInput = document.getElementById('input');
const nameInput =  document.getElementById('name');
const scoreInput =  document.getElementById('score');
const refreshBtn = document.getElementById('refreshButton');

formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const addName = nameInput.value;
    const addScores = scoreInput.value;
    fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            addName,
            addScores,
        }),
    });
    nameInput.value = '';
    scoreInput.value = '';
})
refreshBtn.addEventListener('click', getData);
getData();
