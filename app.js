// import functions and grab DOM elements
import { isYes } from './utils.js';
const quizButton = document.getElementById('quiz-button');
const results = document.getElementById('results');


// set event listeners 
quizButton.addEventListener('click', ()=>{
  // get user input
    const confirmed = confirm('Would you like to start the quiz?');
  
  // initialize state
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Do I like disc golf?');
        const ans2 = prompt('Do I like cooking?');
        const ans3 = prompt('Do I like lounging with my cats?');
        const ans4 = prompt('Do I like fried rice?');
        console.log(name, ans1, ans2, ans3, ans4);
        let score = 0;
        // use user input to update state 
        if (isYes(ans1)) {
            score++;
        }
        if (isYes(ans2)) {
            score++;
        }
        if (isYes(ans3)) {
            score++;
        }
        if (isYes(ans4)) {
            score++;
        }
        alert('Thanks for taking the quiz! Check out your results below!');
        // update DOM to reflect the new state
        results.textContent = `${name} you got ${score} of 4 right! That's ${Math.floor((score / 4) * 100)}%`;
    } else {
        console.log('user cancelled');
    }

});