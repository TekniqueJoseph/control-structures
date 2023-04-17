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



function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-'
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*'
    }  else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/'
    }
    createAndWriteLog(initialResult, mathOperator, enteredNumber)
    writeToLog(calculationType, initialResult, enteredNumber, currentResult) 
}

function add() {
    calculateResult('ADD')
}

function subtract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}

function divide() {
    calculateResult('DIVIDE')
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

let userCategory; // should be 'child', 'adult' or 'senior'
let age = 30;

function solve() {
    if (age < 18) {
        userCategory = 'child'
        return userCategory
    } else if (age >= 18 & age < 65) {
        userCategory = 'adult'
        return userCategory
    } else {
        userCategory = 'senior'
        return userCategory
    }
}
// console.log(solve())

let user = {
    name: 'Butterfly',
    age: 50,
    email: 'mecca@thebronx.com',
    location: 'Kemet',
    blog: ['Lyrical Traits', 'Dj Essentials'],
    phrase: function() {
        console.log('68 inches above sea level');
    },
    phrase2: function() {
        console.log('93 million miles above these devils')
    },
    logBlog: function(){
        console.log(this.blog[1])
    } 
}

user.phrase()
user.phrase2()
user.logBlog()

