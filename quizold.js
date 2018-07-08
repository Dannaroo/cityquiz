// Capital City Quiz

//Assume the player got the answer wrong
var correctCount = 0;

//Ask the questions
var answer1 = prompt("Question 1. What is the Capital City of Czech Republic?");

if (answer1.toUpperCase() === "PRAGUE" ) {
  alert("You are correct!");
  correctCount += 1;
} else {
  alert("Sorry, the answer is Prague.");
}

console.log(correctCount);

var answer2 = prompt("Question 2. What is the Capital City of Uruguay");

if (answer2.toUpperCase() === "MONTEVIDEO" ) {
  alert("You are correct!");
  correctCount += 1;
} else {
  alert("Sorry, the answer is Montevideo.");
}

console.log(correctCount);

var answer3 = prompt("Question 3. What is the Capital City of Ghana?");

if (answer3.toUpperCase() === "ACCRA" ) {
  alert("You are correct!");
  correctCount += 1;
} else {
  alert("Sorry, the answer is Accra.");
}

console.log(correctCount);

var answer4 = prompt("Question 3. What is the Capital City of Morroco?");

if (answer4.toUpperCase() === "RABAT" ) {
  alert("You are correct!");
  correctCount += 1;
} else {
  alert("Sorry, the answer is Rabat.");
}

console.log(correctCount);

var answer5 = prompt("Question 3. What is the Capital City of Marshall Islands?");

if (answer5.toUpperCase() === "MAJURO" ) {
  alert("You are correct!");
  correctCount += 1;
} else {
  alert("Sorry, the answer is Majuro.");
}

console.log(correctCount);
//tell the player how many they got correct
alert("You got " + correctCount + " answer\(s\) correct!");

if (correctCount === 5) {
  document.write("Congratulations! You are awarded the Gold Crown!");
} else if (correctCount === 4 || correctCount === 3) {
  document.write("Well done! You are awarded the Silver Crown!");
} else if (correctCount === 2 || correctCount === 1) {
  document.write("Good Job! You are awarded the Bronze Crown!");
} else {
  document.write("Sorry, you receive no crown at all!");
}
