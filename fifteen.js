for
while
dowhile 
for of
for in   >>>Object
Map         
filter 

//////for//////


for(i=0;i<5;i++){
    console.log(i)
}



for(i=0;i<color.length;i++){
    console.log(color[i])
}

var color = ["Red","Yellow",['Apple','Mango','Banana'],"Green","Orange"]
for(i=0;i<color.length;i++){
    console.log(color[i])
}


var color = ["Red","Yellow",['Apple','Mango','Banana'],"Green","Orange"]
for(i=0;i<color.length;i++){
    if(Array.isArray(color[i])){
        for(j=0;j<color[i].length;j++){
            console.log(color[i][j])
        }
    }else{
        console.log(color[i])
    } 
}

var color = ["Red","Yellow",['Apple','Mango','Banana'],"Green","Orange"]
undefined
Array.isArray(color)
true
var a = "hii"
undefined
Array.isArray(a)
false

///////////////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}


/////////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

////////
var color = ["Red","Yellow","Green","Orange"]
for(abc of color){
    console.log(abc)
}


var color = ["Red","Yellow",['Apple','Mango','Banana'],"Green","Orange"]

for(clr of color){
    if(Array.isArray(clr)){
        for(abc of clr){
            console.log(abc)
        }
    }else{
        console.log(clr)
    }
}