
function check(){

var Question1 = document.quiz.Question1.value;
var Question2 = document.quiz.Question2.value;
var Question3 = document.quiz.Question3.value;
var Question4 = document.quiz.Question4.value;
var Question5 = document.quiz.Question5.value;
var Question6 = document.quiz.Question6.value;
var Question7 = document.quiz.Question7.value;
var Question8 = document.quiz.Question8.value;
var Question9 = document.quiz.Question9.value;
var Question10 = document.quiz.Question10.value;
var correct = 0;

if (Question1 == "6") {
    correct++;
}
if (Question2 == "5%") {
    correct++;
}
if (Question3 == "Africa") {
    correct++;
}
if (Question4 == "Almonds") {
    correct++;
}
if (Question5 == "Micheal Jackson") {
    correct++;
}
if (Question6 == "Apple") {
    correct++;
}
if (Question7 == "Manga") {
    correct++;
}
if (Question8 == "Monolouge") {
    correct++;
}
if (Question9 == "Bern") {
    correct++;
}
if (Question10 == "A species of salamander") {
    correct++;
}

var messages = ["You really could've done better",
 "Try harder next time sis", 
 "You did averagely...whatever that means" , 
 "Not too shabby",
  "Ok maybe i should've chosen harder questions...but well done!"];

var Range;

if (correct < 2) {
    range = 4;
}
if (correct > 2 && correct < 5){
    range =3;
}
if (correct > 4 && correct < 7){
    range =2;
}
if (correct > 6 && correct < 9){
    range =1;
}
if (correct > 8){
    range =0;
}


document.getElementById("after_submit").style.visibility = "visible";   
document.getElementById("message").innerHTML = messages[Range];
document.getElementById("number_correct").innerHTML ="You got " + correct + "correct"
}


