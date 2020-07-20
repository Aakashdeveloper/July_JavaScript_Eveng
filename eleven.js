for multiple condition and multiple output if/else
for one condition and multiple output switch case
for only one condition we use ternory

var name = "aakash";

switch(name){
    case 'aakash':
        console.log("You are user")
        break;
    case 'John':
        console.log("You are admin");
        break;
    case 'Bhumika':
        console.log("You are super admin")
        break;
    default:
        console.log("I Dont know")
}


var a = 10
switch(a%2){
    case 0:
        console.log("Number is even")
        break;
    case 1:
        console.log("Number is odd")
        break;
    default:
        console.log("Invalid Output")
}