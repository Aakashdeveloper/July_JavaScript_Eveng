/*function sayhi(){
    console.log("hiii")
}

sayhi()
*/
/////
//IFFI
///////

(function(){
    console.log("Hiii IFFI")
}())


//////////
function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}

looping(3)
VM65:3 0
VM65:3 1
VM65:3 2



////////
function * looping(userInput){
    for(i=0;i<userInput;i++){
       yield i
    }
}
undefined
looping(4)
looping {<suspended>}
var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}