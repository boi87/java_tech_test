'use strict'

function evaluateData() {
    let showBox = document.getElementById("showBox");
    let dataString = showBox.innerHTML;

    dataString = dataString.replace(/\s/g, "");
    gatherData(dataString).then((parsedData) => {
        runOperations(parsedData.numbers, parsedData.operator).then((answer) => {
            showBox.textContent = answer;
        })
    }).catch((err) => console.log(err))
}

function addToShowBox(input) {
    let showBox = document.getElementById("showBox");
    switch (input) {
        case 'undo':
            showBox.innerHTML = showBox.innerHTML.substring(0, showBox.innerHTML.length - 1);
            break;
        case 'clear':
            showBox.innerHTML = '';
            break;
        default:
            showBox.innerHTML += input;
    }
}

function runOperations(numbers, operators) {
    let answer = 0;
    for (let i = 0; i < operators.length; i++) {
        if (i === 0) {
            answer = numbers[i];
        }
        switch (operators[i]) {
            case "+":
                answer += numbers[i + 1];
                break;
            case "-":
                answer -= numbers[i + 1];
                break;
            case "*":
                answer *= numbers[i + 1];
                break;
            case "/":
                answer /= numbers[i + 1];
                break;
        }
    }
    return new Promise((resolve, reject) => {
        try {
            resolve(answer);
        } catch (err) {
            reject(err);
        }
    })
}

function gatherData(dataString) {
    return new Promise((resolve, reject) => {
        try {
            let parsedData = {
                numbers: [],
                operator: []
            };
            // filter operators
            parsedData.operator = dataString.split('').filter(x => isNaN(x));

            // filter numbers
            parsedData.numbers =
                dataString
                    .replace(/[^0-9]/g, ' ')
                    .split(' ')
                    .map(x => parseInt(x));

            resolve(parsedData);
        } catch (err) {
            reject(err);
        }
    })
}