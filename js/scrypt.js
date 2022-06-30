"use strict"

const inputs = document.querySelectorAll('.questions__input');
const checkButtons = document.querySelectorAll('.questions__check');

let answers = [
    '2013',
    '3',
    'Майкл',
    'Лос-Сантос',
    'Ламар'
]

for (let i of inputs) {
    i.addEventListener('keyup', checkAnswer);
}
function checkAnswer(e) {
    if (e.key == 'Enter') {
        var answer = this.getAttribute('data-right');
        if (this.value == answer) {
            this.classList.add('_right');
            this.setAttribute('disabled', 'disabled');
        } else {
            this.classList.add('_wrong');
            this.classList.add('_wronganim');
            setTimeout(() => this.classList.remove('_wronganim'), 410);
        }
    }
}
for (let b of checkButtons) {
    b.addEventListener('click', function () {
        var input = this.parentNode.querySelector('.questions__input');
        if (input.value == input.getAttribute('data-right')) {
            input.classList.add('_right');
            input.setAttribute('disabled', 'disabled');
            this.setAttribute('disabled', 'disabled');
        } else {
            input.classList.add('_wrong');
            input.classList.add('_wronganim');
            setTimeout(() => input.classList.remove('_wronganim'), 410);
        }
    })
}