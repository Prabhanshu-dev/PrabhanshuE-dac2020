1. <body>
   FirstName:<input type="text"name="u_field"><small id="u_small"></small>
   <script>
   function validateResume()
   {
    var ptr=/^([0-9\w]*&/;
   if(ptr.test(document.resume.u_field.value))
   {
     document.getElementById("Small")
      textContext="User is valid"
      document.getElementById("u_small").style.color="green";
   }
    else
    {
      document.getElementById("u_small")textContent="user is valid";
     document.getElementById("u_small")style.color="read";
    }
  }

3.<script>  
function GFGFun() {  
    var str = "Visit geeksforGeeks";  
    var n = str.search(/GeeksforGeeks/i);  
    document.write(n);  
}  
GFGFun();  
</script>  

<script> 
function myFunction() { 
  
    // input string 
    var str = "Visit geeksforGeeks!";  
  
    // searching string with modifier i 
    var n = str.search(/GeeksforGeeks/i);  
  
    document.write(n + '<br>'); 
  
    // searching string without modifier i 
    var n = str.search(/GeeksforGeeks/); 
  
    document.write(n); 
}  
myFunction(); 
</script> 

5.<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  });
});
</script>
</head>
<body>

<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>

<button>Change href Value</button>

<p>Mouse over the link (or click on it) to see that the value of the href attribute has changed.</p>

</body>
</html>

6.$("p").bind("click", function(){
   $( "<p>This is a click Event</p>").appendTo( "#result" );
   });
   $("p").bind("dblclick", function(){
     $( "<p>This is a double-click Event</p>"  ).appendTo( "#result" );
	 });
	 
7.$(document). ready(function(){ $(body). css({ 'cursor' : 'none' }); });	 
