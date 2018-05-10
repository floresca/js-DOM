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

// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType); //this will return the noe type 1 - 12, type 1 is an element
// console.log('#page-banner node type is:', banner.nodeName); //This will return the name of the node/element (returns Div)
// console.log('#page-banner has child nodes:', banner.hasChildNodes()); //hasChildNodes is a method! this will show if there are other nodes inside the element

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);


// ----- LESSON 7 -----

// const bookList = document.querySelector('#book-list');

// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent element is :', bookList.parentElement.parentElement);

// console.log(bookList.children);


// ----- LESSON 8 -----

// const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next sibling is:', bookList.nextElementSibling);

// console.log('book-list previous sibling is:', bookList.previousSibling);
// console.log('book-list previous sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';


// ----- LESSON 9 -----

// var h2 = document.querySelector('#book-list h2');

// h2.addEventListener('click', function(e){
//     console.log(e.target);
//     console.log(e);
// });

// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
        
//         const li = e.target.parentElement;
        
//         li.parentNode.removeChild(li);
//     });
// });

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to ', e.target.textContent, ' was prevented');
// });


// ----- LESSON 10 -----

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
   if(e.target.className === 'delete'){
       const li = e.target.parentElement;
       list.removeChild(li);
   } 
});