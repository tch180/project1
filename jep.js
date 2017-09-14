
const questions =  ["Rynar" /*kor*/, "Kurn"/*Noggra*/, "Worf",/*Mogh*/ 'Jadzia', /* Martok */ 'ipsum'/*ipsum*/];
const answers = ["kor", "Noggra", "Mogh", "Martok", "ipsum"];
$(document).ready(function () {
$("button#houseof").on("click" , function(){
   userAnwser = prompt(questions[(Math.floor (Math.random() * questions.length))]);
//for each loop
for (i = 0; i < answers.length; i++) {
    for (i = 0; i < answers.length; i++) {
        if (userAnwser === answers[i]) {
              alert('CORRECT')
       
          }
      }
      
    
     
  }
  

 
 

})})

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
 
 



