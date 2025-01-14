let numberArray = [];
let symbolArray = [];

const collect = (value) => {
    const display = document.getElementById('display');

    if (value === "C") {
        numberArray = [];
        symbolArray = [];
        display.innerHTML = "0";
        return;
    }

    if (value !== "=") {
        if (display.innerHTML === '0') {
            display.innerHTML = "";
        }

        if (value === "+" || value === "-" || value === "*" || value === "/") {
            numberArray.push(parseFloat(display.innerHTML));
            symbolArray.push(value);
            display.innerHTML = "0";
        } else {
            display.innerHTML += value.toString();
        }
    }

    if (value === "=") {
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
