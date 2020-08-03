//Es5
function language(name,country){
    this.name=name;
    this.country=country;
    this.add = function(a,b) {return a+b}
}

var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: "Hindi", country: "India"}
Hindi.name
"Hindi"
Hindi.country
"India"

//Es6

class language1{
    constructor(name,country){
        this.name=name;
        this.country=country 
    }

    add = function(a,b) {return a+b}
}


var English = new language1('English','UK')
undefined
English
language1 {name: "English", country: "UK", add: ƒ}
English.add(2,4)
6