const scoreWrap = document.querySelector('.score-list');
const scoreItem = ['One', 'Two', 'Three'];

const refreshScores = () => {
  scoreItem.map((item) => {
    const scoreItem = document.createElement('li');
    scoreItem.innerHTML = item;
    scoreWrap.appendChild(scoreItem);
    return '';
  });
};
export default refreshScores;