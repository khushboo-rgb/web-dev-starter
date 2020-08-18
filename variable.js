
alert("hello World");

var a = 40;
console.log(typeof(a));

var a = "hello world";
console.log(typeof(a));

var b = 30;
var m = 40;
var c = m + b;
console.log("Sum is " + c);

var d = "hello";
console.log(typeof(d));

var e = true;
console.log(typeof(e));


var f = d + c;
console.log(typeof(f));

var z; //declaration
//z = 10; //definition
console.log(typeof(z)); //undefined

var y = null;
console.log(typeof(y));

let id = Symbol("id");
console.log(typeof(id));

var k = 10;
var p = "10";
//it will give the false result sometime
if(k == p)
{
    console.log("both are equals") //outputequlas but it should be false not equal
}
//it will give the more accurate resukt
if(k === p)
{
    console.log("both are equals")
}
else
{
    console.log("not equal")   //give true that means not equal
}

var l = 10;
if(l)
{
    console.log("l is true");
}
var l = -10;
if(l)
{
    console.log("l is true");
}
var l = 0;
if(l)
{
    console.log("l is true");
}
else
{
    console.log("l is false");   
}

var l = "";
if(l)
{
    console.log("l is true");
}
else
{
    console.log("l is false");   
}

var l = undefined;
if(l)
{
    console.log("l is true");
}
else
{
    console.log("l is false");   
}

var l = "helloooooo";
if(l)
{
    console.log("l is true");
}
else
{
    console.log("l is false");   
}


