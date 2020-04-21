// JS uses lexical scope (static Scope) you cant use variable outside of code blocks. 


// in a scope you can access var defined in that scope or any parent/ancestor 
// Global scope contains everything defined outside of all code blocks

//Local scope- definded inside a code block


//Global scope
let varOne = 'varOne'

if (true) {
    console.log(varOne)
    //local scope
    let varTwo = 'varTwo'
    console.log(varTwo)


    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)