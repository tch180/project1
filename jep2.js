
    //questions array
    const questions =  ["Rynar" , "Kurn", "Worf", 'Jadzia',  'Dax'];
    // answers array 
    const answers = [   "Noggra", "kor", "Mogh", "Martok", "Martok"];
            
    /*function myResponse (userInput) {
        //create function
    if(userInput === true) {
           // if user input matches the array at that location than show alert correct
        alert('Correct'); 
    }   else {
        alert('InCorrect');
        //if user input does not mactch then show alert incorrect. 
    }}*/
      $(document).ready(function () {      
    // button for house of that on click of any button with the id will run through the array of questions and randomly display any, and compare the users input to the anwser array and then display correct or incorrect 
    $("button#houseof").on('click', function(){
        console.log('clicked'); //console log that the button was clicked 
        askQuestion = prompt(questions.shift()) //set askedQuestions = to the users response
    if (askQuestion === answers.shift()) { // if the users input = the array of anwers at space 1 ask questions 
            askQuestion = true;             //if true display correct. 
            alert('Correct');
     var  score =+100;
    } else {
        alert("Incorrect");
      var score =-100;
     

        questions.shift();
        answers.shift();

        return;
        
    
        }
            
    }
        
        
        //$('span#scoresheet').attr('score')
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
    
    
)})