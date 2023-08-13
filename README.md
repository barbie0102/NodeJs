git checkout -b "branch-name"
git add .
git commit -m "addmesg"
git push
upstream- 

# NodeJs
<!-- To get package.json file -->
    npm init  
    pass values to  

# Callback function
If you pass another function to a function as a parameter, it is called a callback function.
It is used in case of libraries and frameworks like NodeJS, JQuery etc.
http.createserver((req,res), ()=>{
    <!-- call back function -->
})
    
## HTTP Methods 
GET     ||    Get certain amount of data frm the server
PUT     ||     Overwriting, full updating -(unlike patch)
DELETE  ||     Deleting data frm the server
PATCH   ||     Updating certain fields
POST    ||     Sending data to the server
PUSH    ||     Add new items to the end of the array

## Server Codes
200     ||      ok
400     ||      Server error
404     ||      Server not found
401     ||      Page not found
201     ||      Insertion or Creation
501     ||      Not Implemented

// method name is always upper case, i.e whenevr 'GET" methd is used. 

# nodemon setup/initialisation
In package.json
script{
    "dev": "nodemon server.js % servername
} 
On terminal
$ npm run dev

% API Routes & endpoints
API stands for Application Programming Interface, meaning it's how to communicate with the system you are creating. A route within an API is a specific path to take to get specific information or data out of.

# # Extra
In servers:
Object format is not allowed neither can be converted tinto String.
String format allowed;
List format isn't allowed,
List can be converted into strings,

# MVC (- Modal View Controller) Architecture
<!-- Schema -->
Student table
id: string
name: string
age: num
i.e the dtype of every attribute
<!-- Modal -->
id: 123
name: dh
age: 23
i.e. frontend part
---------------
Controllers are like brain for API,
Modal specifies the schema or ER diagm of your architecture 

