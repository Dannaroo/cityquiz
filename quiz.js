// Capital City Quiz

//Player starts with score zero
var score = 0;

//Function to ask the questions
function question ( questionNumber, country, city ) {
  var answer = prompt( "Question " + questionNumber + ": What is the capital city of " + country + "?");
  if (answer.toUpperCase() === city) {
    alert("You are correct!");
    return 1;
  } else {
      alert("Sorry, the capital of " + country + " is " + city);
      return 0;
  }
}

//Call function with questions and answers
score += question(1, "CZECH REPUBLIC", "PRAGUE" );
score += question(2, "URUGUAY", "MONTEVIDEO" );
score += question(3, "GHANA", "ACCRA" );
score += question(4, "MORROCO", "RABAT" );
score += question(5, "ROMANIA", "BUCHAREST" );
score += question(6, "EL SALVADOR", "SAN SALVADOR" );
score += question(7, "CAMBODIA", "PHNOM PENH" );
score += question(8, "BARBADOS", "BRIDGETOWN" );
score += question(9, "SUDAN", "KHARTOUM" );
score += question(10, "ARMENIA", "YEREVAN" );


console.log(score);

//tell the player how many they got correct
alert("You got " + score + " answer\(s\) correct!");

if (score === 10) {
  document.write("Congratulations! You are awarded the Gold Crown!");
} else if (score >= 7) {
  document.write("Well done! You are awarded the Silver Crown!");
} else if (score >= 4) {
  document.write("Good Job! You are awarded the Bronze Crown!");
} else {
  document.write("Sorry, you receive no crown at all!");
}
