export const score = document.querySelector('.score');
export const name = document.querySelector('.name');
export const scoresList = document.querySelector('.score-list');
export const btnRefresh = document.querySelector('.refresh');

export const scoreAndName = () => {
  const list = document.createElement('li');
  if (name.value === 0 || score.value === 0) {
    return false;
  }
  list.innerText = `${name.value}:  ${score.value}`;
  scoresList.append(list);

  return true;
};