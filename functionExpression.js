//function treated as values

var f = function foo()
{
    console.log("hello Function Expression");
};

f();

//function declaration
function foo1()
{
    console.log("hello Function Decalration");
}
// with function expression ; semicolon is mandatory
var fun = function foo1()
{
    console.log("hello Function Expression");
};

fun();

//Anonymous function passing a function as an expression or value but without name

var anonymousFun = function ()
{
    console.log("Anonymous Function Expression");
};

anonymousFun();


//give an exception
//anonymousFun = 1;
//anonymousFun();//it is not possible with anonymous function


//passing one function to another function as an argument
var z = function ()
{
    console.log("Function Expression");
};

var executor = function(fn) {
 fn();//executing the function
}
executor(z);


//passing one function to another function as an argument with some parameters
var y = function (name)
{
    console.log("Name is " + " " + name);
};

var executor = function(fn,name) {
 fn(name);//executing the function
}
executor(y,"khushboo"); //passing function ,parameter for the function



//passing function as an object property to objects

var obj = {
    "prop" : "hello",
    "prop2" : true
};
//assigning method to an object property
obj.myMethod = function() {
    console.log("function in objects");  
};
obj.myMethod();




