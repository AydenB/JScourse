// Function - input (argument), code, output

let greetUser = function(){
    console.log('Welcome User')
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//challenge

// convert Fahrenheit to Celsius

//(32-0)
//print the converted values

let convert = function(temp){
    let Celsius = (fahrenheit - 32) * 5/9
    return Celsius
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)