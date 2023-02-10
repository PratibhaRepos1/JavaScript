function plusMinus(arr) {
    const sizeOfArray = arr.length;
    let totalPositive = 0;
    let totalNegative = 0;
    let totalZeros = 0;
    let ratiosPositive;
    let ratiosNegative;
    let ratiosZeros;

    for(let i=0; i< arr.length; i++) {
        if(arr[i] > 0) {
            totalPositive +=1;
        }
        else if(arr[i] < 0) {
            totalNegative +=1;
        }
        else {
            totalZeros +=1;
        }
    }
    ratiosPositive = (totalPositive / sizeOfArray).toFixed(6);
    ratiosNegative = (totalNegative / sizeOfArray).toFixed(6);
    ratiosZeros = (totalZeros / sizeOfArray).toFixed(6);

    console.log(ratiosPositive);
    console.log(ratiosNegative);
    console.log(ratiosZeros);

}

const arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);m 