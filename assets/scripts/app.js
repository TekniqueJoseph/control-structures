const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

// Gets and writes calculation log
function createAndWriteLog(resultBeforeCalc, operator, calcNum) {
    const calcDesc = `${resultBeforeCalc} ${operator}  ${calcNum}`
    outputResult(currentResult, calcDesc); // from vendor file
}

// Gets and creates Object logEntry
function writeToLog(opId, prevResult, opNum, newResult) {
    const logEntry = {
        operation: opId,
        prevResult: prevResult,
        number: opNum,
        result: newResult
    };
    logEntries.push(logEntry)
    console.log(logEntries)
}

function add() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteLog(initialResult, '+', enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog(initialResult, '-', enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog(initialResult, '*',enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog(initialResult, '/',enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

// event listeners for vendor methods
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// let numbers = [10, 3, -1];

// function solve() {
//     numbers.push(8)
//     numbers.push(2)
// }
// solve()
// console.log(numbers)

