if(condition){
    ///do something
}else{
     ///do something
}

var a =  94790
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 94790 is even


var a = 15
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisble by 3`)
}
else{
    console.log(`Number ${a} is odd`)
}


var a = 15
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3==0 && a%5==0){
    console.log(`Number ${a} is divisble by 3 or 5`)
}
else{
    console.log(`Number ${a} is odd`)
}

var a = 15
if(a%2==0){
    console.log(`Number ${a} is even`)
}else if(a%3==0 || a%5==0){
    console.log(`Number ${a} is divisble by 3 or 5`)
    if(a%3==0){
        console.log(`Number ${a} is divisble by 3`)
    }else{
        console.log(`Number ${a} is divisble by 5`)
    }
}
else{
    console.log(`Number ${a} is odd`)
}



var a = 12
if(a%2==0){
    console.log(`Number ${a} is even`)
}
if(a%3==0){
    console.log(`Number ${a} is divisble by 3`)
}

////Ternory operator
var a = 10
a>10 ? "Hii":"Bie"
"Bie"
var a = 10
a==10 ? "Hii":"Bie"
"Hii"
a==10 ? a+1:a-1
11
a>10 ? a+1:a-1
9


a>10?"hi":"bie"?10:20
10
a>10?"hi":"bie"?false:true
false
a==10?"hi":"bie"?10:20
"hi"