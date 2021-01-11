1.A sparse array is one in which the elements do not have contiguous indexes starting at 0. Normally, 
the length property of an array specifies the number of elements in the array. If the array is sparse, 
the value of the length property is greater than the number of elements. Sparse arrays can be created 
with the Array() constructor or simply by assigning to an array index larger than the current array length.	
a = new Array(5);   // No elements, but a.length is 5.
a = [];             // Create an array with no elements and length = 0.
a[1000] = 0; 
var a1 = [,];           // This array has no elements and length 1
var a2 = [undefined];   // This array has one undefined element
0 in a1                 // => false: a1 has no element with index 0
0 in a2  

2.Keywords are tokens that have special meaning in JavaScript: break, case, catch, continue, debugger, default, 
delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, 
var, void, while, and with.

3.== in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing 
two variables, but this operator also checks datatype and compares two values. ... It returns true only if both values and data 
types are the same for the two variables.

4.Number "number"
String "string"
Boolean "boolean"
object "object"
Function "function"
Undefined "undefined"
Null "object"

5.var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

6.var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

var x = 16 + "Volvo";

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

var answer1 = "It's alright";             // Single quote inside double quotes
var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

7.var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();
 var d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();
var d = new Date();
document.getElementById("demo").innerHTML = d.getMonth();
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];
var d = new Date();
document.getElementById("demo").innerHTML = d.getHours();
var d = new Date();
document.getElementById("demo").innerHTML = d.getMinutes();
var d = new Date();
document.getElementById("demo").innerHTML = d.getMilliseconds();

8.document.getElementsByTagName("h3")[0]

9.<html>
<head>
<script>
function myFunction() {
console.log(document.getElementsByTagname("h3"))
}
function validateForm() {
  var x = document.getElementById('fname').value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</script>
<style>
 div{
  background-color: lightgrey;
  
  border: solid green;
  padding: 10px;
  margin-left: 100px;
  margin-right:100px;
 }
</style>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</head>
<body>
<div>
<form action="" method = "POST">
<label for="fname">First name:</label><br>
<input type="text" id="fname" name="fname"onfocusout="validateForm()"><br>
<h3> Mob.no:9455542369 </h3>
<h3>Email-id:prabhanshu4@gmail.com</h3>
<h3>Address:Paranpur,Bisauri,Chandauli,U.P</h3>
</div>
<div>
<h3>Educational Qualifications:</h3>
<table class="table table-striped">
   <tr>
   <th>School/College name   </th>
   <th>Board   </th>
   <th>C.G.P.A/Percentage   </th>
  </tr>
  <tr>
    <td>St.john's School</td>
	<td>I.C.S.E</td>
	<td> 62.8% </td>
  </tr>	
    <tr>
    <td>St.john's School</td>
	<td>I.C.S.E</td>
	<td> 76.4% </td>
  </tr>
   <tr>
    <td>SRM IST</td>
	<td>B.Tech</td>
	<td> 72.5% </td>
  </tr>
    <tr>
    <td>EDAC</td>
	<td>DAC</td>
	<td> 71.5%</td>
  </tr> 
</table>  
<h3>Projects:</h3>
<p>1)Autonomous Robot Car</p>
<p>2)Electricity Bill Management System</p>
<p>3)Apartment Utility Management System</p>
<h3>Skills:</h3>
<p>Java,Data Structures ,DBMS ,HTML,CSS</p>
<h3>Achievements:</h3>
<p>1)Second highest in Basics of Programming Module</p>
<p>2)Project Leader in Final Project</p>
<h3>Languages:</h3>
<p>English,Hindi</p>
</form>
   
</div>
</body>
</html>

10.$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});