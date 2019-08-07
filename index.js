// #### Exercise 10
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK! If the sum is greater than 21 print BUST! If the sum is less than 21 print “The total is [TOTAL]”

// var card1 = parseInt(prompt("Enter card 1"));
// var card2 = parseInt(prompt("Enter card 1"));
// var card3 = parseInt(prompt("Enter card 1"));
// var sum = card1 + card2 + card3;
//
// if (sum === 21) {
//     console.log("Blackjack!");
// }else if (sum > 21) {
//     console.log("Bust!");
// }else{
//     console.log(sum);
// }
// ### Exercise 11
// Ask the user to enter their grade. Print their letter grade:
//
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//
// ##### Extra Credit:
//     If it's negative or over 100 print an error.

// var userGrade = parseInt(prompt("Enter grade"));
// if(userGrade >= 90 && userGrade <= 100) {
//     console.log("A");
// }else if(userGrade >= 80 && userGrade <= 89) {
//     console.log("B");
// }else if(userGrade >= 70 && userGrade <= 79) {
//     console.log("C");
// }else if(userGrade >= 60 && userGrade <= 69){
//     console.log("D");
// }else if(userGrade >= 0 && userGrade <= 59) {
//     console.log("F");
// }else{
//     console.log("Error");
// }


// ### Exercise 12
// Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”
var userAge = parseInt(prompt("Enter your age"));


if(userAge >= 0 && userAge <= 125) {
    console.log("Real Age");
}else{
    console.log("Not real age");
}