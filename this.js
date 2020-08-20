console.log("hello Khush"

);
 //object
var person = {
    "firstname" : "khus",
    "lastname" : "shri",
    //function inside object
    "getFullName" : function()
    {
          return this.firstname + "  " + this.lastname; //we are initializing this function using this object property
    }
};

var fullName = person.getFullName();
console.log(fullName);

var person2 = person;
person = {};
console.log(person2.getFullName()); 



var person1 = {
    "firstname" : "khus",
    "lastname" : "shri",
    //function inside object
    "getFullName" : function()
    {
          return this.firstname + "  " + this.lastname; //we are initializing this function using this object property
    }, //nested object
"address" : {
       "street" : "sahara State",
       "city"  : "bhopal",
       "state"  : "MP"
    },
    "isFromState" : function(state)
    {
        return (this.address.state === state);
    }
};
console.log(person1.isFromState("UP"));
var person3 = {
    "firstname" : "khus",
    "lastname" : "shri",
    //function inside object
    "getFullName" : function()
    {
          return this.firstname + "  " + this.lastname; //we are initializing this function using this object property
    }, //nested object
"address" : {
       "street" : "sahara State",
       "city"  : "bhopal",
       "state"  : "MP"
    },
    "isFromState" : function(state)
    {
        if(this.address.state === state)
        {
            return true;
        }
        else
        return false;
    }
};

console.log(person3.isFromState("UP"));
