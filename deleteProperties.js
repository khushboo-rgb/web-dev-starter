
console.log("WELCOME KHUSHBOO");
//change the already defined property of an object
var myObj4 = {
    "prop1" : "hello",
    "prop2" : 123,
    "prop3" : true,
    "prop4" : "undefined",
    "myObj2" : {
        "innerProp" : "inner property"
    }
};
myObj4.myObj2.innerProp="undefined";

console.log("Updated Object with new property value");

console.log( myObj4);

//delete properties using delete operator

delete myObj4.prop4;
console.log("After Deleting the prop4 property using delete property");
console.log( myObj4);