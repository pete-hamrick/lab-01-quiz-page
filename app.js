// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// const confirmed = confirm('hello');
// console.log(confirmed);
// const myName = prompt('What is your name?');
// console.log(myName);

//get the button element
//add click listener event
//confirm the user wants to start the quiz
//if they do -- prompt them for at least 3 questions and store the answer
//for each answer, check if the user entered a correct value
//track the number of correct answers
//at the end of the quiz update the results section with the number of correct answers

const quizButton = document.getElementById('quiz-button');
// const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz?');
    console.log(confirmed);
    if (confirmed){
        const name = prompt('What is your name?');
        const ans1 = prompt('Do I like disc golf?');
        const ans2 = prompt('Do I like cooking?');
        const ans3 = prompt('Do I like lounging with my cats?');
        const ans4 = prompt('Do I like fried rice?');
        console.log(name, ans1, ans2, ans3, ans4);
        let score = 0;

        console.log('final score', score);
    } else {
        console.log('user cancelled');
    }
});