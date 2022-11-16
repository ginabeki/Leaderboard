import './style.css';
import Api from './modules/api.js';

const scoreList = document.querySelector('.score-list');
const loader = (element) => {
  element.innerHTML = `<div class="loader">
                          <p>Loading...</p>
                      </div>`;
};

document.addEventListener('DOMContentLoaded', () => {
  const game = new Api(scoreList);

  loader(scoreList);
  game.getData()
    .then((data) => { game.renderAll(data.result); });

  document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const score = e.target.score.value;
    game.sendData({ user: name, score })
      .then((data) => {
        if (data) {
          game.render({ user: name, score });
          e.target.name.value = '';
          e.target.score.value = '';
        }
      });
  };
  document.querySelector('.btn.refresh').onclick = () => {
    loader(scoreList);
    game.getData()
      .then((data) => { game.renderAll(data.result); });
  };
});