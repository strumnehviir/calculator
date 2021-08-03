let firstOparend = []
let firstOparendstring = ''
let secondOparend = []
let secondOparendstring = ''
let operatorMachine = ''
let total = ''
let equalCheck = false

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if ( b === 0){
        return "∞"
    }
    else{
        return a / b
    }

}

function percentage(a, b){
    return (a/b)*100
}

function buttonPressListener(){
    let btn = document.getElementsByClassName("btns")
    let p = 0
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", (e) => {
            let output = e.target.value
             if (output === "AC"){
                 allClear()
             }
             else{
                inputSorter(output)
             }
        });
    }    
}

function refreshDisplay(a){
    let display = document.getElementById("display")
    display.innerText = a
}



function inputSorter(input){
    equalCheck = false
    
    if(input === "equal"){
        operator(firstOparendstring, secondOparendstring, operatorMachine)
        equalCheck = true
        firstOparend = []
        firstOparendstring = ''
        secondOparend = []
        secondOparendstring = ''
        operatorMachine = ''
    }
    
    
    if (input === "plus" || input === "multiply" || input === "divide" || input === "minus" || input === "%"){
        operatorMachine = input
        refreshDisplay(operatorMachine)


    }

    else if( operatorMachine != '' && secondOparend.length < 8 && equalCheck === false) { 
        secondOparend.push(input)
        secondOparendstring = secondOparend.join("")
        refreshDisplay(secondOparendstring)
    }
    
    else if(firstOparend.length < 8 && operatorMachine === '' && equalCheck === false){
        firstOparend.push(input)
        firstOparendstring = firstOparend.join("")
        refreshDisplay(firstOparendstring)

    }
    
}

function operator(first, second, sign){
    
    let firstNumber = parseFloat(first)
    let secondNumber = parseFloat(second)
    
    if (sign === "plus"){
        total = add(firstNumber, secondNumber)
        let totalRounded = round(total)
        refreshDisplay(totalRounded)
        
    }

    else if (sign === "multiply"){
        total = multiply(firstNumber, secondNumber)
        let totalRounded = round(total)
        refreshDisplay(totalRounded)

    }

    else if (sign === "divide"){
        total = divide(firstNumber, secondNumber)
        let totalRounded = round(total)
        refreshDisplay(totalRounded)

    }

    else if (sign === "minus" ){
        total = subtract(firstNumber, secondNumber)
        let totalRounded = round(total)
        refreshDisplay(totalRounded)

    }

    else if (sign === "%"){
        total = percentage(firstNumber, secondNumber)
        let totalRounded = round(total)
        refreshDisplay(totalRounded + "%")
    }

}

function allClear(){
    let display = document.getElementById("display")
    display.innerText = "0"
    firstOparend = []
    firstOparendstring = ''
    secondOparend = []
    secondOparendstring = ''
    operatorMachine = ''
    total = ''
    equalCheck = false
}

function round(num) {
    return parseFloat(Math.round(num + 'e' + 6) + 'e-' + 6);
}

buttonPressListener()