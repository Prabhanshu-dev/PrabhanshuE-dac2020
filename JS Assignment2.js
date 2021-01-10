1.var addTo=function(passed)
{
  var add=function(inner)
  {
    return passed +inner;
  };
  return add;
};

var addThree=new addTo(3);
console.log(addThree(1));


2.function reverseString(str)
{
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) 
    {
        newString += str[i];
    }
    return newString;
}
reverseString('hello')


3.var x=[{radius:5},{radius:9},{radius:2}];

x.sort(function(a,b)
{
    return  a.radius-b.radius  
})


5.a= [5,4,3,2,1]
  n = a.length;  
         temp = 0;  
         for(i=0; i < n; i++)
         {  
                 for( j=1; j < (n-i); j++)
                 {  
                          if(a[j-1] > a[j])
                          {  
                                 //swap elements  
                                 temp = a[j-1];  
                                 a[j-1] = a[j];  
                                 a[j] = temp;  
                         }
                 }
         }
 for( i=0; i < n; i++)
 {  
        console.log(a[i]);           
 }  
   


6.Inheritance:-
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
	
 Constructor:-
 function Person(first, last, age, gender, interests) {

  // property and method definitions

}

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};