function NumPoli(num) {
    var temp, reminder, final = 0;

    temp = num;
    if (num < 0) return false;

    while(num > 0) {
        reminder = num % 10;
        console.log('rem: ' + reminder);

        num = parseInt(num/10);
        console.log('after divide by 10: ' + num);
        final = final * 10 + reminder;
        console.log('final: ' + final)

    }

    if(final === temp) {
        return true;
    }
    else {
        return false;
    }
}

console.log(NumPoli(1));
