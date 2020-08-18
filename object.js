//its a string
var myObj = "hello";
console.log(myObj);

//its an object
var myObj = {};
console.log(myObj);
//dynamically adding property to object
myObj.prop1 = "hello";

//we can add more properties to the same object
myObj.prop2 = 123;
console.log(myObj);

//if we want to get a single specific property
console.log("The number property is: " + myObj.prop2);

//OBJECT LiTERAL
//we are adding property inline without creating an empty object we can initialize right there only inline
var myObj = {
    "prop1" : "hello",
    "prop2" : 123,
    "prop3" : true

};
console.log(myObj);
//if we want to get a single specific property
console.log("The number property is: " + myObj.prop2);

console.log("Accessing a property that does not exist    : " + myObj.prop4);

console.log("Accessing a property using dot(.) notation: " + myObj.prop2);

console.log("Accessing a property using square[] notation: " + myObj["prop2"]);

//Using [] notation if you want to access some special reserved key word/ starts with number  property name then we can use this;

var myObj = {
    "prop1" : "hello",
    "prop2" : 123,
    "prop3" : true,
    "1"     : 88888 


};
console.log("" + myObj ["1"]);

//property name is dynamuc

var myObj = {
    "prop1" : "hello",
    "prop2" : 123,
    "prop3" : true,
    "1"     : 888
};

var propertyName = "prop1";
console.log("" + myObj [propertyName]);

//Nested objects property (dot and square notation interchenged)

var myObj1 = {
    "prop1" : "hello",
    "prop2" : 123,
    "prop3" : true,
    "myObj2" : {
        "innerProp" : "inner property"
    }
};


console.log("access the inner object");
console.log(myObj1.myObj2);
console.log("access the inner object property"  +"    " + myObj1.myObj2.innerProp);

//add a new property into the existing object

myObj1.myObj2.newInnerProperty = "hello New Property";

console.log("add a new property into the existing object") ;
console.log( myObj1);