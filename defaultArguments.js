 function add (a,b)
{
var i, sum =0;
for( i=0 ;i<arguments.length; i++)
{
    sum += arguments[i];
}
return sum;
};
console.log(add(12,10,10,20,30));