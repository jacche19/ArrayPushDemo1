//build an array that stores first & last names. The default value of the array will be empty.
var lastName = [];
var firstName = [];

//Ask user for a first name, and store it in the first names array.
var first = prompt("What is your first name?");
firstName.unshift(first);

//Ask user for a last name, and store it in the last names array.
var last = prompt("What is your last name?");
lastName.unshift(last);

//display to the window both first and last name from the array with the length of the both arrays.
window.alert(firstName[0] + " " + lastName[0] + "; " + firstName.length + ", " + lastName.length);