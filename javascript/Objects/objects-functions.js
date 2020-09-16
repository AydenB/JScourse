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
    console.log(`${book.title} by ${book.author}`)

}

getSummary(myBook)
getSummary(otherBook)