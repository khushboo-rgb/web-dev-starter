
console.log("hello arrays");
var myArray = ["hello",10,30,40,"world",{}];
console.log(myArray);
myArray.push(80);//add to last element
myArray.push(90);
myArray.push(100);
console.log(myArray);
myArray.pop();//get the last element
console.log(myArray);
myArray.shift();//get the first element
console.log(myArray);
myArray.unshift("hello");
console.log(myArray);
myArray.slice(0,4);//doesnot work with es5
console.log(myArray);
/*myArray.forEach(function()
{
    console.log("for an element");
});*/

 var fun = function(item)
 {
     console.log("for an element" + item);
 };

 myArray.forEach(fun);//can pass function as an argument to an array