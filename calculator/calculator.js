let numberArray = [];
let symbolArray = [];
let count = 0;
const collect = (value) => {
    const display = document.getElementById('display');

    if(display.innerText.length > 10){display.innerHTML==""}
    if(display.innerHTML=="NaN"){display.innerHTML=="Logic Error"}
    if (value === "C") {
        numberArray = [];
        symbolArray = [];
        display.innerHTML = "0";
        return;
    }

    if (value === "delete" && count > 0) {
        value = ''
        let newString = ""
        let displayArray = display.innerHTML.split("")
        displayArray.pop()
        for (let number of displayArray) {
            newString += number
        }
        display.innerHTML = `${newString}`
    }

    if (value !== "=") {

        if (display.innerHTML === '0') {
            display.innerHTML = "";
        } else if (count === 0 && value === 0) {
            display.innerHTML = "0";
        }

        if (value === "+" || value === "-" || value === "*" || value === "/") {
            numberArray.push(parseFloat(display.innerHTML));
            symbolArray.push(value);
            display.innerHTML = "0";
        } else {
            display.innerHTML += value.toString();
        }
        count++;
    }else{
        numberArray.push(parseFloat(display.innerHTML));
        let result = numberArray[0];

        for (let count = 0; count < symbolArray.length; count++) {
            let nextNumber = numberArray[count + 1];
            let operator = symbolArray[count];

            switch (operator) {
                case "+":
                    result += nextNumber;
                    break;
                case "-":
                    result -= nextNumber;
                    break;
                case "*":
                    result *= nextNumber;
                    break;
                case "/":
                    result /= nextNumber;
                    break;
            }
        }

        display.innerHTML = result.toString();
        numberArray = [];
        symbolArray = [];
    }

    console.log(numberArray);
    console.log(symbolArray);
};
