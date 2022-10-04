function reverseInt(num){
    const reversed = num
        .toString()
        .split('')
        .reverse()
        .join('');

        return parseInt(reversed) * Math.sign(num);
    
    // if(num < 0 ) {
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);

}

console.log(reverseInt(12));