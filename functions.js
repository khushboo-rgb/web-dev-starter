function sayHello()
{
    console.log("Functions Demo");


}
//function calling
sayHello();

//pasing string as an argument
function sayHello(name)
{
    console.log("Hello" +"  " + name);


}
//function calling
sayHello("khushboo");

//pasing multiple argument
function sayHello(firstName, lastName)
{
    console.log("Hello" +"  " + firstName + "  " + lastName);


}
//function calling
sayHello("khushboo", "shrivastava");

//pasing multiple argument and at time of calling passing only then we will get undefined in that case
function sayHello(firstName, lastName)
{
    console.log("Hello" +"  " + firstName + "  " + lastName);


}
//function calling
sayHello("khushboo");

//if you are caliing with arguments and passing only two then third one will get ignored

function sayHello(firstName, lastName)
{
    console.log("Hello" +"  " + firstName + "  " + lastName);


}
//function calling
sayHello("khushboo", "shrivastava", 30);

//function can return values like other languages


function sayHello(firstName, lastName)
{
    return "Hello" +"  " + firstName + "  " + lastName;
}
//function calling
var getReturnValues = sayHello("khushboo", "shrivastava");
console.log("function returning string values");
console.log(getReturnValues);

//if we write return but not returning anything then we will get undefined

function sayHello1(firstName, lastName)
{
    return ;
}
//function calling
var getReturnValues = sayHello1("khushboo", "shrivastava");
console.log("function returning nothing");
console.log(getReturnValues);

//without return it will also getting undefined

function sayHello2(firstName, lastName)
{
    console.log("Hello" +"  " + firstName + "  " + lastName);
}
//function calling
var getReturnValues1 = sayHello2("khushboo", "shrivastava");

console.log(getReturnValues1);