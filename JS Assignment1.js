1.function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Functions</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 
</script>

</body>
</html>



2.var person={Name:"Prabhanshu",Age:"22",Place:"VNS"}
console.log(person.Name);
console.log(person.Age);
console.log(person.Place);

var x = new Object();
x.firstName="Prabhanshu";
x.lastname="Prabhanshu";
x.age="22";
console.log(x.firstName);
console.log(x.lastname);
console.log(x.age);


3.var arr=['INDIA','CHINA','AMERICA'];
console.log(arr);

4.function is_integer(x)
{
 if(Number.isInteger(x))
   {
     console.log("True");
   }
  else
    {
      console.log("false");
    }
}
 is_integer(2)
 
5.var sum=0;
var arr1=[1,2];
arr1.forEach(myFunction);

function myFunction(item)
{
  sum =sum+item;
 
}
 console.log(sum);

6.function toCelsius(f) 
{
  return (5/9) * (f-32);
}
toCelsius(77)

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
fToC(25)


7.sum=1;
function fToC(x) 
{
     for(i=1;i<=x;i++)
       {
         sum=sum*i;
         
       }
    return sum;
} 
g=fToC(5)
console.log(g);

8.function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(87, [25, 10, 5, 2,1]));