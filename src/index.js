import './style.css';
import Api from './modules/api.js';

const scoreList = document.querySelector('.score-list');

document.addEventListener('DOMContentLoaded', () => {
  const formulaOne = new Api(scoreList);
  const contentLoader = (e) => {
    e.innerHTML = `<div class="load">
                            <p>Loading...</p>
                        </div>`;
  };
  contentLoader(scoreList);
  formulaOne.getData()
    .then((data) => { formulaOne.displayAll(data.result); });

  document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const score = e.target.score.value;
    formulaOne.sendData({ user: name, score })
      .then((data) => {
        if (data) {
          formulaOne.display({ user: name, score });
          e.target.name.value = '';
          e.target.score.value = '';
        }
      });
  };
  document.querySelector('.btn.refresh').onclick = () => {
    contentLoader(scoreList);
    formulaOne.getData()
      .then((data) => { formulaOne.displayAll(data.result); });
  };
});