// question and answer arrays 

//const questions = ["Rynar" /*kor*/ , "Kurn" /*Noggra*/ , "Worf", /*Mogh*/ 'Jadzia', /* Martok */ 'ipsum' /*ipsum*/ ];

//const answers = ["kor", "Noggra", "Mogh", "Martok", "ipsum"];

$(document).ready(function () {

const houseQuestions = [
    {
      questions: "Worf",
      answer: "Mogh ",
      points: 100,
    },
{
        questions: "Rynar",
        answer: "Kor",
        points:200,
},
{
       questions: "Kurn",
        answer:"Noggra",
        points:300,
},
{
       questions: "Jadzia",
        answer:"Martok",
        points: 400,
},
{
       questions: "ipsum",
        answer:"musip",
        points:500,
},
];
//const x = prompt(houseQuestions[1].questions)

//$('#button#houseof').on('click', function (){
    $('#100').attr('disabled, true')
//})
 //var housename = houseQuestions



//$('.houseof1').attr('disabled', false)

// button for house of.

$("button#houseof").on("click", function () {
        //$('#houseof').attr('disabled', true)
        userAnwser = prompt(houseQuestions[1][(Math.floor(Math.random() * houseQuestions.length))]);
        //for loop
        let x = true;
        for (i = 0; i < houseQuestions.answers.length; i++) {
            if (userAnwser === houseQuestions[1].answers[i]) {
                x = true
                break;
            } else {
                x = false
            }
        }
        if (x === true) {
            alert('correct')
        } else {
            alert('no')
            return;
        }
}




)

})