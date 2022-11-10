/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 123 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);
// if(scoreDolphins > scoreKoalas) {
//     console.log("DolphinsTeam wins a trophy");
// }
// else if(scoreDolphins < scoreKoalas)
// {
//     console.log("Winner is KoalasTeam");
// }
// else if(scoreDolphins === scoreKoalas) {
//     console.log("Draw!!! Both teams win the Trophy");
// }

//Bonus 1 & Bonus 2
const scoreDolphins = (102 + 59 + 89) / 3;
const scoreKoalas = (102 + 20 + 89) / 3;

const minScore = 100;


console.log(scoreDolphins, scoreKoalas);
if(scoreDolphins >= minScore && (scoreDolphins > scoreKoalas)) {
    console.log("Dolphin Team wins a trophy!!!");
}
else if(scoreKoalas >= minScore && scoreDolphins < scoreKoalas)
{
    console.log("Koalas Team wins a trophy!!!");
}
else if(scoreDolphins === scoreKoalas && scoreDolphins >= minScore && scoreKoalas >= minScore) {
    console.log("Draw!!! Both teams win the Trophy...!!!");
}
else {
    console.log("No one wins the Trophy...!!! :(");
}
