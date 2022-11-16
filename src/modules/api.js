export default class Api {
  constructor(wrapper) {
    this.id = 'YXOldI6lhVGDO0ByqNvt';
    this.url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.id}/scores`;
    this.wrapper = wrapper;
  }

  async sendData(data) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async getData() {
    const response = await fetch(this.url, {
      method: 'GET',
    });
    return response.json();
  }

  display = (data) => {
    const li = document.createElement('li');
    li.innerHTML = `${data.user} : ${data.score}`;
    li.className = 'list-item';
    this.wrapper.appendChild(li);
  };

  displayAll = (arr) => {
    this.wrapper.innerHTML = '';
    const div = document.createElement('div');
    arr.forEach((data) => {
      const li = document.createElement('li');
      li.innerHTML = `${data.user} : ${data.score}`;
      li.className = 'list-item';
      div.appendChild(li);
    });
    this.wrapper.appendChild(div);
  };
}
