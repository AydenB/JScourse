let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A Peoples History",
    author: "Howard Zinn",
    pageCount: 723
}

let secondBook = {
    title: "Breakfast of Champions",
    author: "Kurt Vonnegut",
    pageCount: 210
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    
}

let bookSummary = getSummary(myBook)
let otheBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)



// challenge area

//create function
//    take farenheit in - return with all three


