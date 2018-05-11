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

----- LESSON 8 -----

How to navigate between sibling elements (elements on the same level)
const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling); //This will return the (next) notation that sits in between nodes!
console.log('book-list next sibling is:', bookList.nextElementSibling); //This will return the actual element

console.log('book-list previous sibling is:', bookList.previousSibling); //This will take you to the (next) notation that sits in between nodes
console.log('book-list previous sibling is:', bookList.previousElementSibling); //This will take you to the previous element

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!';
//Above we can see that we can move around and edit the document as before using the sibling calls
//bookList calls the item with ID bookList in the document
//next we go to the previous sibling element
//then we find the 'p' element using query selector
//then we append a new line break <br/> to the inner html so our new text appears underneath the existing text on the p element

----- LESSON 9 -----

var h2 = document.querySelector('#book-list h2'); //this assigns the element h2 inside the element with id book-list to the h2 variable

h2.addEventListener('click', function(e){ //this event listeners wait for a click on the h2 then does a function
    console.log(e.target); //e represent the event object. the event object with target will return h2
    console.log(e); // the e by iteself will return the even itself (the coordinates where the click happened, whether shift was held, etc)
});

var btns = document.querySelectorAll('#book-list .delete'); // this assings the class .delete, inside booklist, to the btns variable

Array.from(btns).forEach(function(btn) { //we turn btns into an array then loop through it
    btn.addEventListener('click', function(e) { //each loop waits for a click before function
        
        const li = e.target.parentElement; //the event target (span) looks to its parent 'li' and we assign it to li
        
        li.parentNode.removeChild(li); //li calls its parent ul and tells it to delete the the child that just called it
    });
});

// the following code will prevent the link from going anywhere
const link = document.querySelector('#page-banner a'); //first we call the anchor element inside page-banner and assign it to 'link'

link.addEventListener('click', function(e){ //the event listener runs a function on click
    e.preventDefault(); //the event will prevent the default work that the anchor link is supposed to do
    console.log('navigation to ', e.target.textContent, ' was prevented'); //the console will tell the user that the navigation was prevented
    
})

----- LESSON 10 -----

Event bubbling is when the event occurs and moves up the DOM tree making sure every event before it takes place as well
if a button is clicked and there is an event listener in the element above, then the button event will happen, then the next event up will also do something, etc

const list = document.querySelector('#book-list ul'); //the list const calls the ul element inside book-list

list.addEventListener('click', function(e){ //an event listener is added to the ul
   if(e.target.className === 'delete'){ //if the target with class name delete is clicked the button will do nothing BUT! event bubling means the event in ul will happen next
       const li = e.target.parentElement; //the constant li looks at the parent element
       list.removeChild(li); //the parent element says "delete the child li which we are referring to right now"
   } 
});

----- LESSON 11 -----

const addForm = document.forms['add-book']; //forms is a special type of html, like anchors or buttons, and we can query the DOM for forms in the document

addForm.addEventListener('submit', function(e){ //The event listener waits for 'submit', for information to be provided before acting
   e.preventDefault(); //The default action of a form is to refresh the page with the items (even the ones you deleted). this prevents that
   const value = addForm.querySelector('input[type="text"]').value; //we run query selector on the form for the input with type text/string, and we get the value of that input field to grab what is actually typed
   console.log(value); //this just logs it to the console
});

----- LESSON 12 -----

//IN this lesson we learned how to add elements to the html

  const addForm = document.forms['add-book']; // we are still referencing the add form

addForm.addEventListener('submit', function(e){
   e.preventDefault();
   const value = addForm.querySelector('input[type="text"]').value; //we got rid of the console.log
   
   //the order the children are listed matter!
   const li = document.createElement('li'); //we gave the createElement method to the document and the new element is li
   const bookName = document.createElement('span'); //we made a bookName value and created an element called span
   const deleteBtn = document.createElement('span'); //we made a deleteBtn value and created and element called span
   

   deleteBtn.textContent = 'delete'; //we added the 'delete' to the textContent of the deleteBtn span element
   bookName.textContent = value; //we added the 'value' to the textContent of bookName
   
   //the below will create an empty li without the above info
   
   li.appendChild(bookName); //this appendChild will append the bookName span into li
   li.appendChild(deleteBtn); //this appendChild will append the deleteBtn span into li
   list.appendChild(li); //this appendChild will append the new li to the list, which per LESSON 10 is our ul element
});

----- LESSON 13 -----

   //add classes
   bookName.classList.add('name'); //this code adds the class "name" to the bookName
   deleteBtn.classList.add('delete'); //this code add the class "delete" to the deleteBtn
   
});

----- LESSON 14 -----

How to change attributes using java script

var book = document.querySelector('li:first-child.name')
 the above will return <span class="name">Name of the Wind</span>

book.getAttribute('class')
    will return the name of the attribute class, in this case "name"
    
book.setAttribute('class', 'name-2')
    will find the class attribute and then it will change whats in it with the new value
    
book.hasAttribute('class')
    will look inside the element for the attribute 'class' and return true or false
    
book.removeAttribute('class')
    will remove the attribute called out from the element
    
book.setAttribute('class', 'name')
    will add the class attribute and will give it the value of 'name'
    

----- LESSON 15 -----

const hideBox = document.querySelector('#hide'); /created new constant called hideBox to call the element with hide in it

hideBox.addEventListener('change', function(e){ //we gave it event listener change to catch changes and run function
   if (hideBox.checked){ //hideBox.checked will return true or false if checked or unchecked
      list.style.display = "none"; //when it returns true the display will remove the list items (list is the constant we gave to the ul and all its items)
   } else {
      list.style.display = "initial"; //when it returns false the list constant returns to its initial values (visible)
   }
});

----- LESSON 16 -----

//making a search bar that hides items that do not match
const searchBar = document.forms['search-books'].querySelector('input'); //this code looks at the form with search-books as its name, then inside that form it looks for the tag/element input

searchBar.addEventListener('keyup', function(e){ //event listener keyup used to run the code when the user lets go of the key they are tying
   const term = e.target.value.toLowerCase(); //value of term is target of  the code which is the input, it specifically looks for the value entered, then turns it to lower case
   
   const books = list.getElementsByTagName('li'); //this ensures that we look at all the elements in the ul tag
   
   Array.from(books).forEach(function(book){ //we turn the list into an array and run a function for the event
      const title = book.firstElementChild.textContent; //here we look for the text content of the ul child 
      if(title.toLowerCase().indexOf(term) != -1){ //when the string of the search does not match the strings of the target the equation returns -1, so as long as the equation does not = !1 the code can keep returning books
         book.style.display = 'block';
      } else {
         book.style.display = 'none'; //this part hides the books if they = -1
      }
   });
});

----- LESSON 17 -----

const tabs = document.querySelector('.tabs'); //This makes a reference to the tabs which is the ul with the two list items
const panels = document.querySelectorAll('.panel'); //This makes a reference to the two div panels
tabs.addEventListener('click', function(e){ //this adds an event listener to the tabs
   if(e.target.tagName == "LI"){ //if the target of the event listener is an li tag from the ul
      const targetPanel = document.querySelector(e.target.dataset.target); //dataset is an attribute that looks for a data atribute, in this case with the name of target 
      //the data attribute target is point towards either the about id or the contact id
      
   panels.forEach(function(panel){ //document.querySelectorAll turns the items into a node so no need to turn into an array
      if(panel == targetPanel){ //if panel is equal to targetPanel (which is the target #about or #contact)
         panel.classList.add('active'); //this add the class active to the panel if the above is true
      } else {
         panel.classList.remove('active'); //this removes the active class from the panels that do not match. You can initialize a panel with active class to make it the default panel
      }
   });
   }
});

----- LESSON 8 -----

document.addEventListener('DOMContentLoaded', function(){ 
   
    This event goes at the top of the script page
    This event will prevent the code from running until the DOM has completely loaded
    With this the script file can be at the top of the HTML page
    All the javascript content should be wrapped inside this event listener
    
});