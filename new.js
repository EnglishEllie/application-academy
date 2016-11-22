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

var evennumbers = 2
while (evennumbers >0){
    console.log("hello") 
 evennumbers = evennumbers -1 
}

var comma = ","

var numbersparagraph = document.getElementById("100intergers");
for(var entry=0; entry <=200; entry += 2){
    numbersparagraph.innerHTML += entry + comma
}

var start = 0
var previous = 1
var next


for(var count = 1; count <= 10; count += 1){
    console.log(previous + start);
    next = (previous + start);
    previous = start;
    start = next;
}

function fib(numberoftimes){
    var start = 0
    var previous = 1
    var next
    for(var count = 1; count <= numberoftimes; count += 1){
        console.log(previous + start);
        next = (previous + start);
        previous = start;
        start = next;
    }
}

function fibth(nthnumber){
    var start = 0
    var previous = 1
    var next
    for(var count = 1; count <= nthnumber; count += 1){
        next = (previous + start);
        previous = start;
        start = next;
    }
     console.log("the " + nthnumber + " of the fibonnacci sequence is " + next);
}


function recursiveFib(nthnumber, previous, current, count){
    var next = previous + current; 
    if (count <= nthnumber){
        return recursiveFib(nthnumber, current, next, count + 1);
    } else {
        return next;
    }
}

console.log("recursive!: " + recursiveFib(12, 1, 0, 0));

var myfunction = function(){
    console.log("this is my function");
    return 5
}
var five = myfunction
console.log(five())


function foo(providednumber, multiplicationfactor){
    //console.log("this is my function");
    return (5 + providednumber) * multiplicationfactor
}


foo

console.log(foo(1,2));
console.log(foo(8,3));

fib(20)
fibth (19)