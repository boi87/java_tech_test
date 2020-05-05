'use strict'

function evaluateData() {
    let showBox = document.getElementById("showBox");
    let dataString = showBox.innerHTML;

    dataString = dataString.replace(/\s/g, "");
    // console.log(dataString);
    gatherData(dataString).then((parsedData) => {
        console.log(parsedData);
        runOperations(parsedData.numbers[0], parsedData.numbers[1], parsedData.operator).then((answer) => {
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
		default: showBox.innerHTML += input;
    }
}

function runOperations(numOne, numTwo, operator) {
    return new Promise((resolve, reject) => {
        try {
            let answer = 0;
            switch (operator) {
                case "+":
                    answer = numOne + numTwo;
                    break;
                case "-":
                    answer = numOne - numTwo;
                    break;
                case "*":
                    answer = numOne * numTwo;
                    break;
                case "/":
                    answer = numOne / numTwo;
                    break;
            }
            resolve(answer)
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
                operator: ''
            };
            let dataArr = [];
            for (let i = 0; i < dataString.length; i++) {
                if (isNaN(dataString.charAt(i))) {
                    parsedData.operator = dataString.charAt(i);
                    dataArr = dataString.split(dataString.charAt(i));
                }
            }
            parsedData.numbers = dataArr.map(x => +x);
            resolve(parsedData);
        } catch (err) {
            reject(err);
        }
    })
}