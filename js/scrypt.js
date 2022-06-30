"use strict"

const questionsList = document.querySelector('.questions');
const inputs = document.querySelectorAll('.questions__input');
const checkButtons = document.querySelectorAll('.questions__check');

let answers = [
    '2013',
    '3',
    'Майкл',
    'Лос-Сантос',
    'Ламар'
]
let questions = [
    'Год выхода GTA 5?',
    'Сколько главных героев в игре?',
    'Имя первого героя за которого начинается игра?',
    'Как называется город, в котором происходят действия игры?',
    'Имя лучшего друга Франклина?'
]


function setQuestions() {
    for (let i = 0; i < questions.length; i++) {
        questionsList.innerHTML += `
        <div class="questions__item">
            <div class="questions__content">
                <div class="questions__title">${questions[i]}</div>
                <div class="questions__answer">
                    <input type="text" class="questions__input">
                    <button class="questions__check">✓</button>
                </div>
            </div>
        </div>
        `
    }
    const inputs = document.querySelectorAll('.questions__input');
    const checkButtons = document.querySelectorAll('.questions__check');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function (e) {
            if (e.key == 'Enter') {
                var answer = answers[i];
                var input = inputs[i];
                if (input.value == answer) {
                    input.classList.add('_right');
                    input.setAttribute('disabled', 'disabled');
                } else {
                    wrongAnswer(input);
                }
            }
        })
    }
    for (let b = 0; b < checkButtons.length; b++) {
        checkButtons[b].addEventListener('click', function () {
            var input = checkButtons[b].parentNode.querySelector('.questions__input')
            if (input.value == answers[b]) {
                input.classList.add('_right');
                input.setAttribute('disabled', 'disabled');
            } else {
                wrongAnswer(input);
            }
        })
    }
}


for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function (e) {
        if (e.key == 'Enter') {
            var answer = answers[i];
            var input = inputs[i];
            if (input.value == answer) {
                input.classList.add('_right');
                input.setAttribute('disabled', 'disabled');
            } else {
                wrongAnswer(input);
            }
        }
    })
}
for (let b = 0; b < checkButtons.length; b++) {
    checkButtons[b].addEventListener('click', function () {
        var input = checkButtons[b].parentNode.querySelector('.questions__input')
        if (input.value == answers[b]) {
            input.classList.add('_right');
            input.setAttribute('disabled', 'disabled');
        } else {
            wrongAnswer(input);
        }
    })
}

// for (let i of inputs) {
//     i.addEventListener('keyup', checkAnswer);
// }
// function checkAnswer(e) {
//     if (e.key == 'Enter') {
//         var answer = this.getAttribute('data-right');
//         if (this.value == answer) {
//             this.classList.add('_right');
//             this.setAttribute('disabled', 'disabled');
//         } else {
//             this.classList.add('_wrong');
//             this.classList.add('_wronganim');
//             setTimeout(() => this.classList.remove('_wronganim'), 410);
//         }
//     }
// }
// for (let b of checkButtons) {
//     b.addEventListener('click', function () {
//         var input = this.parentNode.querySelector('.questions__input');
//         if (input.value == input.getAttribute('data-right')) {
//             input.classList.add('_right');
//             input.setAttribute('disabled', 'disabled');
//             this.setAttribute('disabled', 'disabled');
//         } else {
//             input.classList.add('_wrong');
//             input.classList.add('_wronganim');
//             setTimeout(() => input.classList.remove('_wronganim'), 410);
//         }
//     })
// }

function wrongAnswer(input) {
    input.classList.add('_wrong');
    input.classList.add('_wronganim');
    setTimeout(() => input.classList.remove('_wronganim'), 410);
}



// function checkAnswer(e) {
//     if (e.key == 'Enter') {
//         var answer = answers[i];
//         var input = inputs[i];
//         if (input.value == answer) {
//             input.classList.add('_right');
//             input.setAttribute('disabled', 'disabled');
//         } else {
//             input.classList.add('_wrong');
//             input.classList.add('_wronganim');
//             setTimeout(() => input.classList.remove('_wronganim'), 410);
//         }
//     }
// }