$(document).ready(function () {
//questions array
const questions =  ["Rynar" , "Kurn", "Worf", 'Jadzia',  'Dax'];
// answers array 
const answers = ["kor", "Noggra", "Mogh", "Martok", "Martok"];
        
      
        
// button for house of that on click of any button with the id will run through the array of questions and randomly display any, and compare the users input to the anwser array and then display correct or incorrect 
$("button#houseof").on("click" , function(){
userAnwser = prompt(questions[(Math.floor (Math.random() * questions.length))]);
        
let x = true;
    for (i = 0; i < answers.length; ++i) {
        if (userAnwser === answers[i]) {
        x = true
        break;
        } else {
        x = false
                }
        } if (x === true) {
            alert('Correct')
        } else {
            alert('Incorrect')
            return;
        }
          // if answer is correct 
         if(x === true) {
             $('span#scoresheet').html('value')
              
          }
          // take value of button clicked 
          //push it to scoresheet span 
          //do math
    }
 )})



