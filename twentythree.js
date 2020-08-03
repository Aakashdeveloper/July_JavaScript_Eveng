var bob = new Object()
bob.name= "bob"
bob.age = 10
bob.setAge= function(newAge){
    this.age = newAge
}
ƒ (newAge){
    this.age = newAge
}
typeof(bob)
"object"
bob
{name: "bob", age: 10, setAge: ƒ}
bob.setAge(10)
undefined
bob.setAge(11)
undefined
bob
{name: "bob", age: 11, setAge: ƒ}



var tony = new Object()
tony.name= "bob"
tony.age = 10
tony.setAge= function(newAge){
    this.age = newAge
}

var createAge = function(newAge){
    this.age = newAge
}


var tony = new Object()
tony.name= "bob"
tony.age = 10
tony.setAge= createAge

var bob = new Object()
bob.name= "bob"
bob.age = 10
bob.setAge= createAge