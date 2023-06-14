const adviceEl = document.querySelector('h1');
const adviceNum = document.querySelector('.main-wrapper span');

fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => updateAdvice(data.slip))
    .catch(error => console.error(error));
    

function updateAdvice(data) {
    console.log(data.id, data.advice)
  adviceEl.textContent = `"${data.advice}"`;
  adviceNum.textContent = `${data.id}`;
}

function getRandomAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => updateAdvice(data.slip))
    .catch(error => console.error(error));
}

document.getElementById('btn').addEventListener('click', getRandomAdvice);