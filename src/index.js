import './style.css';
import refreshScores from './modules/refreshScore.js';
import addScore from './modules/addScore.js';

const score = document.getElementById('score');
const mainContent = document.getElementById('scores-wrap');

addScore(mainContent);
refreshScores(mainContent);
export default { score };
