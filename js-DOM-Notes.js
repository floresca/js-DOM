-----LESSON 2-----

Use the "document" command to get access to the document object, the HTML document

the document is an object and just like object you can reach into it by using a period ie:
document.getElementById('page-bannner'); 
This will reach for the element with ID 'page-banner' inside the document object


you can assign the above method to a variable you can use over and over in your code!
var banner = document.getElementById('page-banner');
If I call the variable 'banner' the result will be the element inside index.html with the ID of 'page-banner':
// <div data-cloud9-id="10" id="page-banner">...</div>


-----LESSON 3-----

How to ask the DOM for every element with the class of title?

document.getElementByClassName('title') //This access the class on the elements

We can also store it into a variable:
var titles = document.getElementsByClassName('title');
When we call "titles" we will get all of the elements with the class title formatted like this:
[h1.title, h2.title]
NOTE- while this format loks like an array it is not, it is called an HTMLCollection
NOTE- while this format is not an array is CAN be accessed like an array! (get excited!):
        To access a particular element in the HTMLColletion call it
            titles[0] will return the h1 element
            titles[1] will return the h2 element
            
--

It is also possible to call all the elements that are the same (like all the li elements in an unordered list)
To do so:
    var lis = document.getElementsByTagName('li') //this will return all the li elements on the page in the form of a HTMLCollection
    
-- 

Since the elements can be turned into a "sortofArray" (HTMLCollection) we can work through them with loops 

var titles = document.getElementsByClassName('title');

for (i=0; i < titles.length; i++){
	console.log(titles[i]);
} // This will look at every item in the HTMLCollection and return each element individually to the console

NOTE: Just because it sometimes behaves like an array doesnt mean it will always work like an array
        for example: titles.forEach(function(item){
                        console.log(item);
                        }); //this code will return an error, the element is not a function 
                            // this is because not all array methods will work on a HTMLCOllection
                            
NOTE: to use Array logic you can turn the HTMLCollection into an array
check if something is an array console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

you can use the Array.from logic to cycle through an array checking each item

var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles)); 
// console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
    console.log(item);
});


----- LESSON 4 -----

//Query selector can be used with CSS selectors etc, # for IDs, period for classes, li with colon to look at an element
const wmf = document.querySelector('#book-list li:nth-child(2) .name');

//When Query selector encounters several documents that match the criteria, it only return the first one
var books = document.querySelector('#book-list li .name');

//Query selector ALL will return all the items that match the criteria
books = document.querySelectorAll('#book-list li .name');

console.log(books);

//to turn them into an array you can add the Arra.from(variable you made up)
//the forEach loop below will return every item in the array individually
Array.from(books).forEach(function(book) {
    console.log(book);
});

----- LESSON 5 -----

//QUery selector can be used to overwrite the contents of an HTML document by pointing towards that element
var books = document.querySelectorAll('#book-list li .name');

//While calling the element by the ID or class gives a HTMLCollection, using query selector gives a nodelist
//A Nodelist behaves like an array and loops can be run on it like an array without having to turn into array

//The following code turns the items found the the query selector into and array and targets it using a loop
//The function within the loop affect the "TEXT CONTENT" and appends more string items using +=
//REMEMBER html text content is a string and can be concatenated like a js string

Array.from(books).forEach(function(book) {
    book.textContent += "test (book title)"
});

//You can add html by working with the innerHTML, by either replacing or appending
const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p> This is how you add HTML</p>';

----- LESSON 6 -----

//Everything in an HTML document is a NODE
//There are different types of NODES (elements, text, comments, attribute etc) and NODE properties
//when you reach and grab an element you grab the node

----- LESSON 7 -----

// Traversing from one node to another using parentElement or parent Node
// using parentNode and parentElement we can call the parent of the element/node we are currently working with
const bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode);
console.log('the parent element is :', bookList.parentElement.parentElement);

// to call the children of the element we are in ideally we do not use childNode since this will return the child as well as the blank spaces that separate them
//to call children elements we can just call children
console.log(bookList.children); //this will return the elements that are childen to the one we are working in

