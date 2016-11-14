 // seconds since 1.1.1970
 console.log(1 + 1);
 console.log("hello world" + " How are you?");
 var initialmessage = "This has been created with the deft hands of ";
 var name = "Ellie ";
 console.log(initialmessage + name);
document.body.innerHTML += initialmessage + name;
var number = 5;
var number2 = 10;
var newmessage = initialmessage;
document.body.innerHTML += number + (number2 + newmessage);

var currentday = new Date()
var hour = currentday.getHours() 

var morning = "good morning ";
var afternoon = "good afternoon ";
var evening = "good evening ";

var hourparagraph = document.getElementById("hour");
if(hour <12){
   hourparagraph.innerHTML += morning + name;
} else if (hour <18){
    hourparagraph.innerHTML += afternoon + name;
} else {
    hourparagraph.innerHTML += evening + name;
}





