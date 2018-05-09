// ----- LESSON 3 -----

// var titles = document.getElementsByClassName('title');

// // console.log(Array.isArray(titles)); 
// // console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//     console.log(item);
// });


// ----- LESSON 4 -----

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');

// console.log(wmf);

// var books = document.querySelector('#book-list li .name');

// console.log(books);

// books = document.querySelectorAll('#book-list li .name');

// console.log(books);

// Array.from(books).forEach(function(book) {
//     console.log(book);
// });


// ----- LESSON 5 -----

// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book) {
//     book.textContent += "test (book title)"
// });

// const bookList = document.querySelector('#book-list');
// // bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p> This is how you add HTML</p>';


// ----- LESSON 6 -----

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType); //this will return the noe type 1 - 12, type 1 is an element
console.log('#page-banner node type is:', banner.nodeName); //This will return the name of the node/element (returns Div)
console.log('#page-banner has child nodes:', banner.hasChildNodes()); //hasChildNodes is a method! this will show if there are other nodes inside the element

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);