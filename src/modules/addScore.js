const addScore = () => {
  const scoresWrap = document.getElementById('scores-wrap');
  scoresWrap.innerHTML = `<div class="recent-scores">
    <div class="recent-inline">
        <h2>Recent scores</h2>
    <button class="btn">Refresh</button>
    </div>
    
    <ul class="score-list"></ul>
    </div>
    <div class="add-score">
    <h2>Add your score</h2>
    <form class="form" id="form">
        <input id="name" type="text" placeholder="Your name" required>
        <input id="score" type="number" placeholder="Your score" required>
        <input type="submit" class="btn submit " id="submit" value="Submit">
    </form>
    </div>`;
};
export default addScore;