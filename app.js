'use strict';

var answer1 = document.getElementById('resultOne');
var answer2 = document.getElementById('resultTwo');
var answer3 = document.getElementById('resultThree');
var answer4 = document.getElementById('resultFour');
var answer5 = document.getElementById('resultFive');
var total = document.getElementById('total');

var user = prompt('What is your name?');
var counter = 0;

var questArray = [
  [
    user + ', Am I from Seattle? Please answer with "Y" or "N"',
    'Y',
    'YES',
    'You are correct!',
    'Sorry you are wrong, I am from Seattle.'
  ],
  [
    ', Was I born in Germany? Please answer with "Yes" or "No"',
    'Y',
    'YES',
    'You are correct, I was born in Wiesbaden Germany',
    'I\'m sorry, that is incorrect'
  ],
  [
    ' Have I ever seen Star Wars? Please answer with "Y" or "N"',
    'Y',
    'YES',
    'You are wrong, I am the last one that hasn\'t seen it.',
    ' That\'s right, I have not seen Star Wars.'
  ],
   ['Are The Meters the greatest band ever? Please answer "Y" or "N"',
    'Y',
    'YES',
    'That\'s right, ' + user + ' The Meters are the greatest band ever!',
    'I\'m sorry, but you\'re crazy!'
 ],
  ['I\'m thinking of a number 1 through 10, see if you can guess which number it is.',
  'You are too low, guess higher.',
  'You are too high, guess lower.',
  'Good work, you guessed the number I was thinking!'
 ]
];

function firstQuestion() {
  var answer1 = prompt(questArray[0][0]);

  if (answer1.toUpperCase() === questArray[0][1] || answer1.toUpperCase() === questArray[0[2]]) {
    alert(questArray[0][3]);
    resultOne.textContent = questArray[0][3];
    resultOne.className = 'right';
    counter += 1;
  } else {
    alert(questArray[0][4]);
    resultOne.textContent = questArray[0][4];
    resultOne.className = 'wrong';
  }
}

function secondQuestion() {
  var answer2 = prompt(user + questArray[1][0]);

  if (answer2.toUpperCase() === questArray[1][1] || answer2.toUpperCase() === questArray[1][2]) {
    alert(questArray[1][3])
    resultTwo.textContent = questArray[1][3];
    resultTwo.className = 'right';
    counter += 1;
  } else {
    alert(questArray[1][4]);
    resultTwo.textContent = questArray[1][4];
    resultTwo.className = 'wrong';
  }
}

function thirdQuestion() {
  var answer3 = prompt(questArray[2][0]);
  if (answer3.toUpperCase() === questArray[2][1] || answer3.toUpperCase() === questArray[2][2] ) {
    alert(questArray[2][3]);
    resultThree.textContent = questArray[2][3];
    resultThree.className = 'wrong';
  } else {
    alert(questArray[2][4]);
    resultThree.textContent = questArray[2][4];
    resultThree.className = 'right';
    counter += 1;
  }
}

function fourthQuestion() {
  var secretNumber = 5;

  while(answer4 !== secretNumber) {
    var answer4 = parseInt(prompt(questArray[4][0]));

    if (answer4 === secretNumber) {
      alert(questArray[4][3]);
      resultFour.textContent = questArray[4][3];
      resultFour.className = 'right';
      counter += 1;
      return;
    } else if (answer4 < secretNumber) {
      alert(questArray[4][1]);
      resultFour.textContent = questArray[4][1];
    } else if (answer4 > secretNumber) {
      alert(questArray[4][2]);
      resultFour.textContent = questArray[4][2];
    }
  }

}

function fifthQuestion() {
  var answer5 = prompt(questArray[3][0]);

  if (answer5.toUpperCase() == questArray[3][1] || answer5.toUpperCase() == questArray[3][2]) {
    resultFive.textContent = questArray[3][3];
    resultFive.className = 'right';
    counter += 1;
  } else {
    resultFive.textContent = questArray[3][4];
    resultFive.className = 'wrong';
  }
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();

total.textContent = 'You got ' + counter + ' questions correct, nice work ' + user;
console.log('counter: ',counter);
