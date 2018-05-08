Use the "document" command to get access to the document object, the HTML document

the document is an object and just like object you can reach into it by using a period ie:
document.getElementById('page-bannner'); 
This will reach for the element with ID 'page-banner' inside the document object


you can assign the above method to a variable you can use over and over in your code!
var banner = document.getElementById('page-banner');
If I call the variable 'banner' the result will be the element inside index.html with the ID of 'page-banner':
// <div data-cloud9-id="10" id="page-banner">...</div>

