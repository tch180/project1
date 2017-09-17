//Houseof questions array 
const questions = ["Rynar", "Kurn", "Worf", 'Jadzia', 'Dax'];
// House fof answers array 
const answers = ["Noggra", "kor", "Mogh", "Martok", "Martok"];
//ShipClass questions
const shipClassQuestions = ["USS Gandhi", "USS StarGazer", "USS Sao Paulo", "USS Melbourne", "USS Odyssey"];
//ShipClas Answers 
const shipClassAnswers = ["Ambassador", "Constellation", "Defiant", "Excelsior", "Galaxy"];

const ds9Questions = ["1st officer", "Chief Engineer", "Klingon Coffee", "Cardassian Tailor", "First fergeni to enter Star Fleet " ];
const ds9Answers =["Major Kira","Miles O'brian", "Raktajino", "Garak", "" ];
const musicQuestions= ["1","2"];
const musicAnswers =["1","2"];
const voyagerQuestions =[1, 2];
const voyagerAnswers =[1, 2];

$(document).ready(function () {
    // button for house of that on click of any button with the id will run through the array of questions and randomly display any, and compare the users input to the anwser array and then display correct or incorrect 
    $("button#houseof").on('click', function () {
            console.log('clicked'); //console log that the button was clicked 
            askQuestion = prompt(questions.shift()) //set askedQuestions = to the users response
            if (askQuestion === answers.shift()) { // if the users input = the array of anwers at space 1 ask questions 
                askQuestion = true; //if true display correct. 
                alert('Correct');
                var score = +$('button.value'); // add value 
            } else {
                alert("Incorrect"); // otherwise alert incorrect 
                var score = -100; // subtract value 
                //questions.shift(); // take the question out of the array
                //answers.shift(); // take the answers out of the array 
                // $('span#scoresheet').attr(button.value);  working out the syntax
}})
// button function for shipClass
    $('button#shipClass').on('click', function() {
        console.log('clicked');
        askQuestion = prompt(shipClassQuestions.shift())
        if (askQuestion === shipClassAnswers.shift()){
            askQuestion = true;
            alert('Correct');
                 } else {
            alert('Incorrect');
        }           // end of shipclass function 
    })
 // button function for ds9
$('button#ds9').on('click', function(){
    console.log('clicked');
    askQuestion = prompt(ds9Questions.shift())
    if (askQuestion === ds9Answers.shift()){
        askQuestion = true;
        alert('Correct');
             } else {
                 askQuestion = false;
        alert('Incorrect');
    }
}) // end of ds9 function 
// button function for music questions
    $('button#music').on('click', function(){
        console.log('clicked');
        askQuestion = prompt(musicQuestions.shift())
        if (askQuestion === musicAnswers.shift()){
            askQuestion = true;
            alert('Correct');
                 } else {
            alert('Incorrect');
        }   // end of music questions
    }) // button for voyager questions 
    $('button#voyager').on('click', function(){
        console.log('clicked');
        askQuestion = prompt(voyagerQuestions.shift())
        if (askQuestion === voyagerAnswers.shift()){
            askQuestion = true;
            alert('Correct');
                 } else {
            alert('Incorrect');
        }   // end of Voyager questions
    })
})
//doc rdy func

/*function myResponse (userInput) {
    //create function
if(userInput === true) {
       // if user input matches the array at that location than show alert correct
    alert('Correct'); 
}   else {
    alert('InCorrect');
    //if user input does not mactch then show alert incorrect. 
}}*/
  //$('span#scoresheet').attr(.value);
        /*askQuestion = prompt(questions[(Math.floor (Math.random() * questions.length))]); //ask random Question from array
            askQuestion = prompt(questions[0]);
            if (askQuestion === answers[1] ) {
                userInput =true;
                alert('correct');
         } else {
             alert(Incorrect)
         }
         let userInput = true;
             for (i = 0; i < answers.length; ++i) {
                 if (askQuestion === answers[i]) {
                 userInput = true                         //
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
          )}
         */

        /*function myResponse (userInput) {
    //create function
if(userInput === true) {
       // if user input matches the array at that location than show alert correct
    alert('Correct'); 
}   else {
    alert('InCorrect');
    //if user input does not mactch then show alert incorrect. 
}}*/
