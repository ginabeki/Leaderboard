import './style.css';
import { scoreAndName } from './modules/addScore.js';
import refreshScore from './modules/refreshScore.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  scoreAndName();
});
refreshScore();
