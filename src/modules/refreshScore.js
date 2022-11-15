import { btnRefresh, scoresList } from './addScore.js';

const refreshScore = () => {
  btnRefresh.addEventListener('click', () => {
    scoresList.innerHTML = '';
  });
};

export default refreshScore;