var num1=25;
var num2="apple"
var res=num1+num2
console.log("the result is: " + res)
var num1=-4
var num2=+8
var res=num1+num2
document.write("the result of 2 integers is:"+ res);
var number = +prompt("enter any number.")
if (number === +number) {
    alert("This is positive value.");
}
else if (number === -1,-2,-3,-4) {
    alert("This is negitive value.");
}
else if(number === 0){alert("this is Zero.")}
else{alert("Please enter any value")}
document.write("<h1><center>Chapter 10</center></h1>")
var city = prompt("enter your city.");
if (city === "Karachi") {
    console.log("The city of lights")
}
var y = prompt("type y")
if (x = y) {
    var x = prompt("type z");}
else{alert("please type value.")};
if (x = z) {
    alert("wow.");
   }
   else{alert("please enter value.")}
var num = +prompt("Enter 5 digit binary code.")
if (num === 10010) {
    alert("karachi")
}
else{alert("Please write correct code")}
var num = +prompt("type any number.");
if (num===2) {
    alert("now press f5")
}
else{alert("please enter number")}
var num1=+prompt("enter right number.")
if (num1 === 1) {
    alert("Good")
}

var num1=+prompt("enter right number.")
if (num1 === 1) {
    alert("Good")
}
else{alert("this is not right variable.");}

var num = prompt("enter any number.")
if (num >= 5) {
    alert("this is right.")
}
else{alert("this is wrong.")}

var num = +prompt("enter right value.");
if (num === 10) {
    alert("congraulation")
}
else{alert("try again.")}

var firstName = prompt("enter your first name.")
if (firstName === "muhammad") {
    alert("Welcome.")
}
else{alert("No match")}

var num = prompt("enter any number.")
if (num >= 5) {
    alert("this is right.")
}
else{alert("this is wrong.")}

var m = +prompt("enter your maths marks.")
var e = +prompt("enter your english marks.")
var u = +prompt("enter your urdu marks.")
var obtained_marks = m+u+e
var totalMarks = 300 
var percentage = (obtained_marks*100)/totalMarks
document.write("<h3>Marks sheet</h3>")
if (percentage >= "80") {
   document.write("Total marks:" + totalMarks + "<br>" + "Obtained marks:" + obtained_marks + "<br>"+ "percentage:"+ percentage+"%" + "<br>"+"grade:A-one")
}
else if (percentage >= "70") {
    document.write("Total marks:" + totalMarks + "<br>" + "Obtained marks:" + obtained_marks + "<br>"+ "percentage:"+ percentage+"%" + "<br>"+"grade:A")
}
else if (percentage >= "60") {
    document.write("Total marks:" + totalMarks + "<br>" + "Obtained marks:" + obtained_marks + "<br>"+ "percentage:"+ percentage+"%" + "<br>"+"grade:B")
}
else if (percentage >= "50") {
    document.write("Total marks:" + totalMarks + "<br>" + "Obtained marks:" + obtained_marks + "<br>"+ "percentage:"+ percentage+"%" + "<br>"+"grade:C")
}
else if (percentage >= "40") {
    document.write("Total marks:" + totalMarks + "<br>" + "Obtained marks:" + obtained_marks + "<br>"+ "percentage:"+ percentage+"%" + "<br>"+"grade:D")

}

var city = prompt("enter your city name.")
if (city === "karachi") {
    alert("acknowledging it is karachi.")
}
else if (city === "lahore") {
    alert("acknowledging it is lahore.")
}
else {
    alert("enter right city.")
}