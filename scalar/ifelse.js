// conditional statement

var myScore = 92;

if(myScore > 90) {
    console.log('you win Bicycle')
} else {
    console.log('Better luck next time!')
}
//if-else-if example
// 90 to 100 - A
//70 to 89 - B
// 40 to 69 - C
// < 40 - F

var studentScore = 69;

if(studentScore >= 90) {
    console.log('Student grade is A')
} else if( studentScore >= 70 & studentScore <= 89) {
    console.log('Student grade is B')
} else if( studentScore >= 40 & studentScore <= 69) {
    console.log('Student grade is C')
} else {
    console.log('Student has failed!')
}