"use strict"

const questionsList = document.querySelector('.questions');
const mainCheckButton = document.querySelector('.main__check');

// const inputs = document.querySelectorAll('.questions__input');
// const checkButtons = document.querySelectorAll('.questions__check');

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

let questionsAndAnswers = {
    'Год выхода GTA 5?': '2013',
    'Сколько главных героев в игре?': '3',
    'Имя первого героя за которого начинается игра?': 'Майкл',
    'Как называется город, в котором происходят действия игры?': 'Лос-Сантос',
    'Имя лучшего друга Франклина?': 'Ламар'
}

let qA = [
    {
        question: 'Год выхода GTA 5?',
        answer: '2013'
    },
    {
        question: 'Сколько главных героев в игре?',
        answer: '3'
    },
    {
        question: 'Имя первого героя за которого начинается игра?',
        answer: 'Майкл'
    },
    {
        question: 'Как называется город, в котором происходят действия игры?',
        answer: 'Лос-Сантос'
    },
    {
        question: 'Имя лучшего друга Франклина?',
        answer: 'Ламар'
    }
]
/*--------------С использованием массива с объектами qA. МОЙ ТОП! ЛУЧШИЙ СПОСОБ + удобный очень------------------*/
function setQuestionsArrayObject() {
    for (let i of qA) {
        questionsList.innerHTML += `
            <div class="questions__item">
                <div class="questions__content">
                    <div class="questions__title">${i.question}</div>
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
                var answer = qA[i].answer
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
            var answer = qA[b].answer
            if (input.value == answer) {
                input.classList.add('_right');
                input.setAttribute('disabled', 'disabled');
            } else {
                wrongAnswer(input);
            }
        })
    }
    mainCheckButton.addEventListener('click', function () {
        for (let i = 0; i < inputs.length; i++) {
            var answer = qA[i].answer
            if (answer == inputs[i].value) {
                inputs[i].classList.add('_right');
                inputs[i].setAttribute('disabled', 'disabled');
            } else {
                wrongAnswer(inputs[i]);
            }
        }
    });
}
setQuestionsArrayObject()
/*--------------С использованием объекта questionsAndAnswers-------------------*/
function setQuestionsObject() {
    for (let i in questionsAndAnswers) {
        questionsList.innerHTML += `
            <div class="questions__item">
                <div class="questions__content">
                    <div class="questions__title">${i}</div>
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
                var answer = questionsAndAnswers[inputs[i].parentElement.parentElement.querySelector('.questions__title').innerHTML]
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
            var answer = questionsAndAnswers[inputs[b].parentElement.parentElement.querySelector('.questions__title').innerHTML]
            if (input.value == answer) {
                input.classList.add('_right');
                input.setAttribute('disabled', 'disabled');
            } else {
                wrongAnswer(input);
            }
        })
    }
    mainCheckButton.addEventListener('click', function () {
        for (let i = 0; i < inputs.length; i++) {
            var answer = questionsAndAnswers[inputs[i].parentElement.parentElement.querySelector('.questions__title').innerHTML]
            if (answer == inputs[i].value) {
                inputs[i].classList.add('_right');
                inputs[i].setAttribute('disabled', 'disabled');
            } else {
                wrongAnswer(inputs[i]);
            }
        }
    });
}
/*-------С использованием 2х массивов questions и answers. 1й способ, не считая дата-атрибутов в самом HTML---------*/
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
    eventsForInputs(inputs);
    checkButtonsLogic(checkButtons);
    mainCheckButton.addEventListener('click', () => checkAllAnswers(inputs));
}
// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('keyup', function (e) {
//         if (e.key == 'Enter') {
//             var answer = answers[i];
//             var input = inputs[i];
//             if (input.value == answer) {
//                 input.classList.add('_right');
//                 input.setAttribute('disabled', 'disabled');
//             } else {
//                 wrongAnswer(input);
//             }
//         }
//     })
// }
// for (let b = 0; b < checkButtons.length; b++) {
//     checkButtons[b].addEventListener('click', function () {
//         var input = checkButtons[b].parentNode.querySelector('.questions__input')
//         if (input.value == answers[b]) {
//             input.classList.add('_right');
//             input.setAttribute('disabled', 'disabled');
//         } else {
//             wrongAnswer(input);
//         }
//     })
// }
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
/*-------Проверка ответа в inputs(все инпуты). Эту функцию вешаем на кнопку проверки всех ответов---------*/
function checkAllAnswers(inputs) {
    for (let i = 0; i < questions.length; i++) {
        if (answers[i] == inputs[i].value) {
            inputs[i].classList.add('_right');
            inputs[i].setAttribute('disabled', 'disabled');
        } else {
            wrongAnswer(inputs[i]);
        }
    }
}
/*--------Навешивает событие клика по маленьким галочкам. Buttons - все маленькие кнопочки-----------*/
function checkButtonsLogic(buttons) {
    for (let b = 0; b < buttons.length; b++) {
        buttons[b].addEventListener('click', function () {
            var input = buttons[b].parentNode.querySelector('.questions__input')
            if (input.value == answers[b]) {
                input.classList.add('_right');
                input.setAttribute('disabled', 'disabled');
            } else {
                wrongAnswer(input);
            }
        })
    }
}
/*--------Вешает события для инпутов (срабатываение по Enter). inputs - все инпуты------------*/
function eventsForInputs(inputs) {
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
}
/*------Срабатываение при неверном ответе. Навешивает 2 класса. Один из них - анимация + убирает ее--------*/
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


/*--------------RADIO QUIZ-----------------*/
const radiosAll = document.querySelectorAll('.radios__radio');


for (let r of radiosAll) {
    r.addEventListener('change', function (e) {
        var radioClicked = e.target;
        if (radioClicked.hasAttribute('data-right')) {
            var otherRadios = this.parentNode.parentNode.querySelectorAll('.radios__radio');
            var radiosTitle = this.parentNode.parentNode.parentNode.querySelector('.radios__question');
            radiosTitle.classList.add('_right')
            for (let o of otherRadios) {
                o.setAttribute('disabled', 'disabled')
            }
            // this.parendNode.setAttribute('disabled', 'disabled')
        }
    })
}