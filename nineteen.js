var a = 10;

/*function add(){
    var b = 20
    return a+b
}

console.log(a);
console.log(add());
console.log(b);
*/

for(i=0;i<5;i++){
    let b = 10
    console.log(a+b+i)
}

console.log(a);
console.log(b);

var myfun=[]
for(let i=0;i<5;i++){
    myfun.push(function(){return `my out is ${i}`})
}
for(j=0;j<myfun.length;j++){
    console.log(myfun[j]())
}


let a,b;
function mul(a,b) {
    if ((a == 0) || (b == 0)){
        return 0;
    }
    else{
        return (a + mul(a, b - 1));
    }
}
console.log(mul(5,6))
