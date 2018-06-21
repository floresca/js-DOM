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


// ----- LESSON 10 / Delete button functionality -----

// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//    if(e.target.className === 'delete'){
//        const li = e.target.parentElement;
//        list.removeChild(li);
//    } 
// });


// ----- LESSON 11 -----

// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//    e.preventDefault();
//    const value = addForm.querySelector('input[type="text"]').value;


// ----- LESSON 12 -----

   // //create elements
   
   // const li = document.createElement('li');
   // const bookName = document.createElement('span');
   // const deleteBtn = document.createElement('span');
   
   // //add content
   // deleteBtn.textContent = 'delete';
   // bookName.textContent = value;
   
   // //append to document
   // li.appendChild(bookName);
   // li.appendChild(deleteBtn);
   // list.appendChild(li);


// ----- LESSON 13 -----

//    //add classes
//    bookName.classList.add('name');
//    deleteBtn.classList.add('delete');
   
// });


// ----- LESSON 14 -----

// How to change attributes using java script

// var book = document.querySelector('li:first-child.name')
//  the above will return <span class="name">Name of the Wind</span>

// book.getAttribute('class')
//     will return the name of the attribute class, in this case "name"
    
// book.setAttribute('class', 'name-2')
//     will find the class attribute and then it will change whats in it with the new value
    
// book.hasAttribute('class')
//     will look inside the element for the attribute 'class' and return true or false
    
// book.removeAttribute('class')
//     will remove the attribute called out from the element
    
// book.setAttribute('class', 'name')
//     will add the class attribute and will give it the value of 'name'



// ----- LESSON 15 -----

// const hideBox = document.querySelector('#hide');

// hideBox.addEventListener('change', function(e){
//    if (hideBox.checked){
//       list.style.display = "none";
//    } else {
//       list.style.display = "initial";
//    }
// });

// ----- LESSON 16 -----

// const searchBar = document.forms['search-books'].querySelector('input');

// searchBar.addEventListener('keyup', function(e){
//    const term = e.target.value.toLowerCase();
   
//    const books = list.getElementsByTagName('li');
   
//    Array.from(books).forEach(function(book){
//       const title = book.firstElementChild.textContent;
//       if(title.toLowerCase().indexOf(term) != -1){
//          book.style.display = 'block';
//       } else {
//          book.style.display = 'none';
//       }
//    });
// });

// ----- LESSON 17 -----

// const tabs = document.querySelector('.tabs');
// const panels = document.querySelectorAll('.panel');
// tabs.addEventListener('click', function(e){
//    if(e.target.tagName == "LI"){
//       const targetPanel = document.querySelector(e.target.dataset.target);
      
//    panels.forEach(function(panel){
//       if(panel == targetPanel){
//          panel.classList.add('active');
//       } else {
//          panel.classList.remove('active');
//       }
//    });
//    }
// });





/// ----- LESSON 18 -----

document.addEventListener('DOMContentLoaded', function(){

        // ----- delete books in lesson 10

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
   if(e.target.className === 'delete'){
       const li = e.target.parentElement;
       list.removeChild(li);
   } 
});

  
         // ----- add books in lesson 11

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
   e.preventDefault();
   const value = addForm.querySelector('input[type="text"]').value;


         // ----- add elements in lesson 12

   
   const li = document.createElement('li');
   const bookName = document.createElement('span');
   const deleteBtn = document.createElement('span');
   
   //add content
   deleteBtn.textContent = 'delete';
   bookName.textContent = value;
   
   //append to document
   li.appendChild(bookName);
   li.appendChild(deleteBtn);
   list.appendChild(li);


         // ----- add classes to elements in lesson 13

   //add classes
   bookName.classList.add('name');
   deleteBtn.classList.add('delete');
   
});


         // ----- hide books from lesson 15

const hidesBox = document.querySelector('#hide');

hidesBox.addEventListener('change', function(e){
   if (hidesBox.checked){
      list.style.display = "none";
   } else {
      list.style.display = "initial";
   }
});

         // ----- search books in lesson 16

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e){
   const term = e.target.value.toLowerCase();
   
   const books = list.getElementsByTagName('li');
   
   Array.from(books).forEach(function(book){
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term) != -1){
         book.style.display = 'block';
      } else {
         book.style.display = 'none';
      }
   });
});

         // ----- create content information tags in lesson 17

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
   if(e.target.tagName == "LI"){
      const targetPanel = document.querySelector(e.target.dataset.target);
      
   panels.forEach(function(panel){
      if(panel == targetPanel){
         panel.classList.add('active');
      } else {
         panel.classList.remove('active');
      }
   });
   }
});

});