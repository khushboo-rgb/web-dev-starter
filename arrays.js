console.log("WELCOME KHUSHBOO shrivastava To Arrays JS file"); 

var myArrays = ["khushboo", "deepak", "radha", "rani"];
console.log(myArrays[0]);

//if we try to access an index which is not exist then we will get undefined

console.log(myArrays[7]);
myArrays[3] = "java";

console.log(myArrays);
//length of the array
console.log(myArrays.length);

myArrays[400] ="Switzerland";
console.log(myArrays.length);

//length will be still same because it count the number index not the string index 
myArrays["foo"] = "Followup";
console.log(myArrays.length);


