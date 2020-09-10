let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


console.log(`${myBook.title} by ${myBook.author}`)



myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// curly braces signify an object
//properties are pieces of data for an object
// you can use . (dot notation) to get properties

// Ayden is 32 and lives in Louisiana
//increase age by 1 and print again
let myLife = {
    age: 32,
    Name: "Ayden",
    Location: "Louisiana"
}

console.log(`${myLife.Name} is ${myLife.age} and lives in ${myLife.Location}`)
myLife.age = myLife.age + 1
console.log(`${myLife.Name} is ${myLife.age} and lives in ${myLife.Location}`)

