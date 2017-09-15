// question and answer arrays 
const questions =  ["Rynar" /*kor*/, "Kurn"/*Noggra*/, "Worf",/*Mogh*/ 'Jadzia', /* Martok */ 'ipsum'/*ipsum*/];
const answers = ["kor", "Noggra", "Mogh", "Martok", "ipsum"];

$(document).ready(function () {
$('.houseof1').attr('disabled', false)
// button for house of.
$("button#houseof").on("click" , function(){
    $('#houseof').attr('disabled', true)
   userAnwser = prompt(questions[(Math.floor (Math.random() * questions.length))]);
//for loop
let x = true;
for (i = 0; i < answers.length; i++) {
        if (userAnwser === answers[i]) {
            x = true
            break;
        } else {
                x = false
            }
            
            
} if (x === true) {
    alert('correct')
} else {
    alert('no')
    return;
}




}



      
      
    
     
  
  

 
 
)})


//function questions () {
//    const houseofQuestions = [];
//    houseofQuestions.push(questions.shift());
    
//    return houseofQuestions;
//}




//functionrandomQuestions1() {
    
//}
 // if (i === 0) {break; }
    //prompt(questions[i]);
    //button.push(question);Math.floor(Math.random * question.length)
        //alert('button 1');
//var houseofQuestions =houseofQuestions()
 //questions ["Rynar" /*kor*/, "Kurn"/*Noggra*/, "Worf",/*Mogh*/ 'Jadzia', /* Martok */ 'ipsum'/*ipsum*/];
 
 //alert(questions);
 //answers   ["kor", "Noggra", "Mogh", "Martok", "ipsum"]
 //for (i = 0; i < houseofQuestions.length;); i++) {
  //   alert('houseofQuestions[i]');
 
 



