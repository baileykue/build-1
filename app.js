let randomNum = Math.floor(Math.random() * 100);
const button = document.getElementById('generate');
const text = document.getElementById('random-num');

button.addEventListener('click', ()=>{
    text.textContent = randomNum;
});

