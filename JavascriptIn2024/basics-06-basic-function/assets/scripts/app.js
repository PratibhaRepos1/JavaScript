const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc,calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator}  ${calcNumber}`;
    outputResult(currentResult, calcDescription);

}
function add() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initalResult, enteredNumber);

    const logEntry = {
        operation:'ADD',
        preResult: initalResult,
        number: enteredNumber,
        result: currentResult
    }
    logEntries.push(enteredNumber);
    console.log(logEntry);

    //accessing the object data
    console.log(logEntry.operation);
    console.log(logEntry.newResult = 3);
    
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initalResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initalResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initalResult, enteredNumber);
}



//currentResult = add(1, 2);

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
