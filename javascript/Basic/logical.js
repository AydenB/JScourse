// logical AND && operator - true if both sides are true. false otherwise
// logical OR || operator- true if at least one side is true
// || or
// you dont need to specifically specify that they are true or false
//

let temp = 95

if (temp >= 60 && temp <= 90){
console.log ('Its nice out')
} else if (temp <=0 || temp >= 120) {
    console.log("I'm staying in")
}

// 

let isGuestOneVegan = true
let isGuestTwoVegan = true

// are both vegan- only offer up vegan dishes
// at least one is vegan offer both dishes
// no one vegan offer food

if (isGuestOneVegan && isGuestTwoVegan){
    console.log("here are some vegan options")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("here is our menu")
} else {
    console.log ('here is our menu')
}