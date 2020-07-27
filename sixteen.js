function
map
arrow function
IFFI
Generator Function

///////////////////////////
var a = 10
var b = 20
a+b

////////////
function add(a,b){
    return a+b
}

add(2,6)

add(1,2)
3
add(4,5)
9
add('Hi ','JavaScript')
"Hi JavaScript"

function isEven(num){
    var out;
    if(num%2==0){
        out = `Number ${num} is even`
    }else{
        out = `Number ${num} is odd`
    }
    return out
}

isEven(33)
"Number 33 is odd"
isEven(32)
"Number 32 is even"


/////////////////
Method
///////////////////
var isEven = function(num){
    var out;
    if(num%2==0){
        out = `Number ${num} is even`
    }else{
        out = `Number ${num} is odd`
    }
    return out
}

isEven(2343)



//////Es6//////
////Arrow Function///////
var add = (a,b) => { return a+b}

add(1,2)